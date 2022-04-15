import axios from 'axios';

const  varToken = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiIzMmU1NWY3MC0yODA2LTQ4MTItYWE3Ni02ZTQwMTFlMzI0ZTQiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vODYzMTFmOTQtNWU4Yy00MjA5LTg2OTMtNTFjMDAzZDUxMTJlL3YyLjAiLCJpYXQiOjE2NTAwNjUyMDEsIm5iZiI6MTY1MDA2NTIwMSwiZXhwIjoxNjUwMDY5MjY1LCJhaW8iOiJBWVFBZS84VEFBQUFkemVnRkk1b3BBdXpBQnFWc0VmZUNZTGpSa1lpMUZjbUUzcGRSeXRqeENMOGRnMTd1dU4wNzNtNnk2TUFaQ0dIaTJjMFhDRXUzY1ZIRzRQd1B3TWpmcXVjOTd4bzI1TE1JM2tYdGVlREo0bi9MQzArYXpQRnhHMGduU0pMWmVMY202OVUwNkt1Y3dvVlpaK1RmdVBla2xvWFUzTmxWeHZiaXlMNmJ5WFFGanc9IiwiYXpwIjoiYzRjODFmNjAtMzQ1Yy00YjQyLWJkNzEtOTk2NzdiNzQ2YzM2IiwiYXpwYWNyIjoiMCIsImlkcCI6ImxpdmUuY29tIiwibmFtZSI6IuiCieiCiSDpmYgiLCJvaWQiOiI4ZGFjY2Q3NS0wNzNlLTQ1YzAtOWE0YS1kZTE2MGM4MzZmMzYiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJjYzg2MTAxMEBnbWFpbC5jb20iLCJyaCI6IjAuQVVZQWxCOHhob3hlQ1VLR2sxSEFBOVVSTG5CZjVUSUdLQkpJcW5adVFCSGpKT1NBQUgwLiIsInNjcCI6ImFjY2Vzc19hc191c2VyIiwic3ViIjoic3AzZHBZX21jUm9XU1lrNjlqM2d5RVkzQlR0MjRrX3N4cmRhdkhZcVZySSIsInRpZCI6Ijg2MzExZjk0LTVlOGMtNDIwOS04NjkzLTUxYzAwM2Q1MTEyZSIsInV0aSI6IkZGVkYzVDU3eEVLWUNyeWdOTkRmQUEiLCJ2ZXIiOiIyLjAifQ.i5-68ybK6VrbbITgqQyzPupJjetGMUYKrztAL_XQmCeM1DuD-62VtjCh5j4CjEbKftWtt9vpztb6vXssKn9oXvF_xmltUgkLgGI8UZRjgaJid1v1XjncAi_rSdoxnXKwo_IptVXso2mFVcCjlJZA1H_2_QDyi5Qr2NlGI2Y0wH6im-c34is_gE7Ju97qZYvNU9ake5z_1336-ILHT5xbRUmABhHoslY7OTpUNLbLjeNwn9W-WBG-mVHveKF1KTjw2GnrH_oumHLxXVnRZ3xofVTXjOM_MsV-_oaZ8JnJ47dTNR9o_byS6Ljqk3CgwitmBXwSjHjhAaDboP7Y0B9oBQ"

// Request API.
axios
  .post('http://localhost:1337/api/auth/local', {
    // identifier: 'cc861010_gmail.com#EXT#@cc861010gmail.onmicrosoft.com',
    // password: 'cc861010_gmail.com#EXT#@cc861010gmail.onmicrosoft.com',
  },{
    headers: {
      "cc-token": varToken
    }
  })
  .then((response) => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
  })
  .catch((error) => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });