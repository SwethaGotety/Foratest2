// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginByGoogleApi', () => {
  cy.log('Logging in to Google')
  cy.request({
    method: 'GET',
    //url: 'https://www.googleapis.com/auth/userinfo.profile',
    url: 'https://admin.forastaging.net/login',
    
    body: {
      grant_type: 'refresh_token',
      //email: 'swetha.gotety@forastaging.net',
      //password: 'swethapadmini',
      client_id: Cypress.env('googleClientId'),
      client_secret: Cypress.env('googleClientSecret'),
      refresh_token: Cypress.env('googleRefreshToken'),
      //access_token: 'ya29.a0Ael9sCNJht3PayVVuVyQGVkS29Xeid8s62kq_0wFegD0jLMPVe1uLklM0zGK-cXa_Yrzr7V_NjPWf8AVQZTE1RKFKmyE_ozUSthYnJJUuRNS1YaDwzt36nvZenrZkEb2UxAixRhGK2st1-zz8iP_j_akoB2M9v2AaCgYKAWsSARISFQF4udJhVR6BSVGEdMvlPgOWVJbQVg0167',
      //id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg2OTY5YWVjMzdhNzc4MGYxODgwNzg3NzU5M2JiYmY4Y2Y1ZGU1Y2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4MDYwMTk2OTc3MDQtdW9ia2EyamtjcDJjMHYzdXVkdTk3dTVkMHBhN3BybjUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4MDYwMTk2OTc3MDQtdW9ia2EyamtjcDJjMHYzdXVkdTk3dTVkMHBhN3BybjUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTMyMDY0NjA4NTAzMzQ0MTY2NzkiLCJhdF9oYXNoIjoiQTBRc2dBXzlzZ1MtVFFfWXlkZUdOZyIsImlhdCI6MTY4MjE1MjY1MSwiZXhwIjoxNjgyMTU2MjUxfQ.PAikg-cGNq8iDYz0CppcSy5-1omfYYPgaEQA1oFLSxoqNvDa0oClk503_PAH6Zn0sMKjU4bi23t8aVa2lVzZgIFYhhTUwkxQf8XnRrdufxVwtw8izdF-obQOO6XXNZwu5aE7kDyHv4ZSQo6XohTjVnXGICIjb7yvbF8yqPXC8uH2whaGrrOmpzpnNbDQcid0G8zErYOW8gwuIn5AK4au4M7k6YajeRZALe_Ct_uBw08lbnZgzweVn6NmrP1ZJPlwj8yfSZ_jF9pY9-9550zW5--USaCX6MwYHnRNrXCL0-B4O75QnDpAZ1Hm6lh5d9ZZMOWNrW2fzeI2gtzc82gv8w'
    },
  }).then(({ body }) => {
    const { access_token, id_token } = body
    cy.log(access_token)
    cy.log(id_token)
    cy.request({
      method: 'GET',
      //url: 'https://oauth2.googleapis.com/token',
      //url: 'https://accounts.google.com/o/oauth2/v2/auth',
     url: 'https://www.googleapis.com/oauth2/v2/userinfo',
      headers: { Authorization: `Bearer ${access_token}` },
    }).then(({ body }) => {
      cy.log(body)
      const userItem = {
        //id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg2OTY5YWVjMzdhNzc4MGYxODgwNzg3NzU5M2JiYmY4Y2Y1ZGU1Y2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4MDYwMTk2OTc3MDQtdW9ia2EyamtjcDJjMHYzdXVkdTk3dTVkMHBhN3BybjUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4MDYwMTk2OTc3MDQtdW9ia2EyamtjcDJjMHYzdXVkdTk3dTVkMHBhN3BybjUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTMyMDY0NjA4NTAzMzQ0MTY2NzkiLCJhdF9oYXNoIjoiQTBRc2dBXzlzZ1MtVFFfWXlkZUdOZyIsImlhdCI6MTY4MjE1MjY1MSwiZXhwIjoxNjgyMTU2MjUxfQ.PAikg-cGNq8iDYz0CppcSy5-1omfYYPgaEQA1oFLSxoqNvDa0oClk503_PAH6Zn0sMKjU4bi23t8aVa2lVzZgIFYhhTUwkxQf8XnRrdufxVwtw8izdF-obQOO6XXNZwu5aE7kDyHv4ZSQo6XohTjVnXGICIjb7yvbF8yqPXC8uH2whaGrrOmpzpnNbDQcid0G8zErYOW8gwuIn5AK4au4M7k6YajeRZALe_Ct_uBw08lbnZgzweVn6NmrP1ZJPlwj8yfSZ_jF9pY9-9550zW5--USaCX6MwYHnRNrXCL0-B4O75QnDpAZ1Hm6lh5d9ZZMOWNrW2fzeI2gtzc82gv8w',
        token: id_token,
        //token: ya29.a0Ael9sCO1ogORzSYAW953VqiXAVuNWFJ6p5OaFv_BcnmYEqK57tNVHUmIFLofS73uRjBy1eTgQZtNfBwXzvScCG1adT13PkxqO4eV68ALIzTrA9XooLXFrgeqcLpyjui87RdBgF_HwACSGOE2GjGnsEOuh1w4aCgYKAbISARISFQF4udJhTvlVuBSKnbN0jT33a2FCnA0163,
        user: {
          googleId: body.sub,
          email: body.email,
          givenName: body.given_name,
          familyName: body.family_name,
          imageUrl: body.picture,
        
          
        },
        
      }
      
      window.localStorage.setItem('googleCypress', JSON.stringify(userItem))
      cy.visit('/')
      //cy.visit('https://advisor.forastaging.net/bookings')
    })
  })
})