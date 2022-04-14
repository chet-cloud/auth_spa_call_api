import axios from 'axios';

const  varToken = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJlYTY3OGM5Zi1hNDhkLTQ5NzYtYTZlYy1lZGUzYmVjZmMxZWMiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vODYzMTFmOTQtNWU4Yy00MjA5LTg2OTMtNTFjMDAzZDUxMTJlL3YyLjAiLCJpYXQiOjE2NDk5NzA2MDksIm5iZiI6MTY0OTk3MDYwOSwiZXhwIjoxNjQ5OTc1MTQ0LCJhaW8iOiJBWVFBZS84VEFBQUFOcDBQS1kvc3dhaFhFTUNielI1M0d3bk1FbEVoQ05vSDd2UUpXK0pJcGlWU2pGY3lLbTZZQm1ZRUJEMkp6dE80c0wxc0cwUHN1YlpyWnB5eWJ4cFZLKzFaajFZN3Y1R201RFJiNXNwdjVCRkJkdWcra0FEWmpTYjEyOWpZditKMEN0VmprVmhybFN6bnZyNWJzZWh4N1N3VytYRFhMSnE3STJwWHpOMG50YzA9IiwiYXpwIjoiYzRjODFmNjAtMzQ1Yy00YjQyLWJkNzEtOTk2NzdiNzQ2YzM2IiwiYXpwYWNyIjoiMCIsImlkcCI6ImxpdmUuY29tIiwibmFtZSI6IuiCieiCiSDpmYgiLCJvaWQiOiI4ZGFjY2Q3NS0wNzNlLTQ1YzAtOWE0YS1kZTE2MGM4MzZmMzYiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJjYzg2MTAxMEBnbWFpbC5jb20iLCJyaCI6IjAuQVVZQWxCOHhob3hlQ1VLR2sxSEFBOVVSTHAtTVotcU5wSFpKcHV6dDQ3N1B3ZXlBQUgwLiIsInNjcCI6ImFjY2Vzc19hc191c2VyIiwic3ViIjoiRDVDcEt0V2NIZ2tQUEx6QWN5YkppeVJOYUZkZklOR0NlY0c3T3YwaDdIRSIsInRpZCI6Ijg2MzExZjk0LTVlOGMtNDIwOS04NjkzLTUxYzAwM2Q1MTEyZSIsInV0aSI6InR2a1dFZ01oaDBxT2ticnV2R2lRQUEiLCJ2ZXIiOiIyLjAifQ.Ro6PyQwExYzaiUoEs7xmJxouvUzSF1SVZ37yYAj5tLIRB0erkjN8a6iNqoTJ2bCkvKoo1s6r2MnbpDysce97lbwx5cFR_ncKE-Cem1jOKp8kIZH5SAs3x-VVkcj9yfJlfZZr8iMB-oYk_fXijwjOtbRXBmmkCx_KPcIwgb3IthQF_keti8-wbeUw2cHc4oUd8zFKifYBmYLi_y4YiPObe7niSZiyIzo6D4fL78N46CJfkq1celgUtXqanG71H-Qk4tyeP5fptbYPJEKkOspIQFkX81nb_6dh2l171KhlAXp0MGlzxk9J2hqIOUkh34s5Np7JConuEoIi8Avsk8FkNA"

// Request API.
axios
  .post('http://localhost:1337/api/auth/local', {
    identifier: 'cc861010@gmail.com',
    password: 'cc861010@gmail.com',
  },{
    headers: {
      // Authorization: varToken
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