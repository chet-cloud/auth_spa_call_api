import axios from 'axios';

const  varToken = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiIzMmU1NWY3MC0yODA2LTQ4MTItYWE3Ni02ZTQwMTFlMzI0ZTQiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vODYzMTFmOTQtNWU4Yy00MjA5LTg2OTMtNTFjMDAzZDUxMTJlL3YyLjAiLCJpYXQiOjE2NTAzMTYyMzksIm5iZiI6MTY1MDMxNjIzOSwiZXhwIjoxNjUwMzIwMjE3LCJhaW8iOiJBWVFBZS84VEFBQUFSelpsVVJja05UaWVUL3Nyb3N5MkI3ODZGRmk4aXBJbnROK0FabXVJNENFcEQxQi9ZcS9POVo5anI4cElSYURqV1YwQk9lUzRBYTBZQlRZRkxKV2s2eTBPdkR0Z25kd1ptK0JjWTUxKzdxVGhndnBpT3JqNHZIRmx6RXllQXZBd3dheEhveUE3dHhhaU1oZ0VaSFpNS2tGYjk4N2tmRVYzUkRrd0hoUm5kbWc9IiwiYXpwIjoiYzRjODFmNjAtMzQ1Yy00YjQyLWJkNzEtOTk2NzdiNzQ2YzM2IiwiYXpwYWNyIjoiMCIsImlkcCI6ImxpdmUuY29tIiwibmFtZSI6IuiCieiCiSDpmYgiLCJvaWQiOiI4ZGFjY2Q3NS0wNzNlLTQ1YzAtOWE0YS1kZTE2MGM4MzZmMzYiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJjYzg2MTAxMEBnbWFpbC5jb20iLCJyaCI6IjAuQVVZQWxCOHhob3hlQ1VLR2sxSEFBOVVSTG5CZjVUSUdLQkpJcW5adVFCSGpKT1NBQUgwLiIsInNjcCI6ImFjY2Vzc19hc191c2VyIiwic3ViIjoic3AzZHBZX21jUm9XU1lrNjlqM2d5RVkzQlR0MjRrX3N4cmRhdkhZcVZySSIsInRpZCI6Ijg2MzExZjk0LTVlOGMtNDIwOS04NjkzLTUxYzAwM2Q1MTEyZSIsInV0aSI6IjBmbkU4WW5KTmtPNGg3VjZieUN2QUEiLCJ2ZXIiOiIyLjAifQ.jZu94F5vrOpIAAIPHIXGccuLw233FjfrHLaD3T5K_ocxL9ZOvPVHst3_f8QX4K1ZG9j57kZpPe-loyQjDhlSp4DfmJUEl6pAKJTBkOSVUcoT3QH_YLv2pSteipc6WZLzsosgSe0DeSPK2GBXZe1fawxSbzRjcww13ddtQplYQ-zsIvW9aefqrQDXIHFi5EKYj1liH2GCJI9I38qCrd06dj6VlESf-emZM3P_WISLteMXGjIwb3tWQrP8bf6wN_aukZ35kio-gYW7ovZnFqdBSBhIuHl45F2Oa3HVKsH4NLgpSRzN7uPtPccb_WpSG6tAY8cpeLoqcepCYwnm8nsQMQ"

// Request API.
axios.post('http://20.120.98.38/strapi/api/auth/local', {
  //.post('http://localhost:1337/api/auth/local', {
    // identifier: 'cc861010_gmail.com#EXT#@cc861010gmail.onmicrosoft.com',
    // password: 'cc861010_gmail.com#EXT#@cc861010gmail.onmicrosoft.com',
  },{
    headers: {
      "authorization": varToken
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