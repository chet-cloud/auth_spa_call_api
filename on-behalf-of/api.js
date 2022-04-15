/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

const express = require("express");
const https = require('https');
const msal = require('@azure/msal-node');
const jwt = require('jsonwebtoken')
const jwksClient = require('jwks-rsa');

// msal-node-webapi config         
const clientSecret = "-D77Q~RLKgKkj_O3KqRJrm6AgrbeCm3s.7Btv"
const clientId   =  "32e55f70-2806-4812-aa76-6e4011e324e4"
const tenant   =    "86311f94-5e8c-4209-8693-51c003d5112e"


const SERVER_PORT = process.env.PORT || 8000;
const DISCOVERY_KEYS_ENDPOINT = `https://login.microsoftonline.com/${tenant}/discovery/v2.0/keys`;

// Before running the sample, you will need to replace the values in the config, 
// including the clientSecret
const config = {
    auth: {
        clientId: `${clientId}`,
        authority: `https://login.microsoftonline.com/${tenant}`,
        clientSecret: `${clientSecret}`,
    },
    system: {
        loggerOptions: {
            loggerCallback(loglevel, message, containsPii) {
                console.log(message);
            },
            piiLoggingEnabled: false,
            logLevel: msal.LogLevel.Verbose,
        }
    }
};

// Create msal application object
const cca = new msal.ConfidentialClientApplication(config);

// Create Express App and Routes
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
    next();
});


const validateJwt = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        
        const validationOptions = {
            audience: config.auth.clientId, // v2.0 token
            issuer: config.auth.authority + "/v2.0" // v2.0 token
        }

        jwt.verify(token, getSigningKeys, validationOptions, (err, payload) => {
            if (err) {
                console.log(err);
                return res.sendStatus(403);
            }

            next();
        });
    } else {
        res.sendStatus(401);
    }
};

const getSigningKeys = (header, callback) => {
    var client = jwksClient({
        jwksUri: DISCOVERY_KEYS_ENDPOINT
    });

    client.getSigningKey(header.kid, function (err, key) {
        var signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
    });
}


app.get('/obo', validateJwt, (req, res) => {
    const authHeader = req.headers.authorization;

    const oboRequest = {
        oboAssertion: authHeader.split(' ')[1],
        scopes: ["user.read"],
    }
    cca.acquireTokenOnBehalfOf(oboRequest).then((response) => {
        console.log(response);
        callGraph(response.accessToken, (graphResponse) => {
            res.status(200).send(graphResponse);
        });
    }).catch((error) => {
        res.status(500).send(error);
    });
});

const callGraph = (accessToken, callback) => {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
        }
    };

    const req = https.request(new URL("https://graph.microsoft.com/v1.0/me"), options, (res) => {
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            callback(chunk);
        });
    });
    req.on('error', (err) => {
        console.log(err);
    });
    req.end();
}

app.listen(SERVER_PORT, () => console.log(`Msal Node Web API listening on port ${SERVER_PORT}!`))