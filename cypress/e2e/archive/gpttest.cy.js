describe('Login with OAuth 2.0', () => {
    it('should log in with Google account', () => {
      // Send a GET request to the OAuth 2.0 authorization endpoint
      cy.request({
        url: 'https://admin.forastaging.net/',
        qs: {
          //client_id: 'YOUR_CLIENT_ID',
          redirect_uri: 'https://accounts.google.com/signin/oauth/',
          response_type: 'code',
          client_id: '806019697704-uobka2jkcp2c0v3uudu97u5d0pa7prn5.apps.googleusercontent.com',
              client_secret: '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',
              refresh_token: '1//04TnJuDYrdiOFCgYIARAAGAQSNwF-L9Ir847oid2ld6ZD993zErE6goEVIVveMwOhatJEoZJ7Z3idhaLr7ue4-ktsRDZI7PRPIN8'
          //scope: 'YOUR_SCOPES',
         // state: 'YOUR_STATE',
        },
      }).then((response) => {
        // The response should redirect to the authorization page
        //expect(response.status).to.eq(200)
        //cy.log(response.redirectedToUrl);
        //expect(response.redirectedToUrl).to.include('https://developers.google.com/oauthplayground');
  
        // Now you can use Cypress to interact with the authorization page and log in with your Google account
        // For example:
        cy.visit("https://admin.forastaging.net/")
        cy.contains('Sign in with Fora Google').click()
    cy.wait(8000)
  cy.origin('https://accounts.google.com', () => {
      cy.on('uncaught:exception', (err,runnable) => { 
         return false
        })          
  cy.get('#identifierId').clear().type('swetha.gotety@forastaging.net')  //Email entered
           cy.wait(1000)
            cy.get('#identifierNext').click({force: true})  //Next button clicked
            cy.get('#password').type('swethapadmini')
           cy.on('uncaught:exception', (err,runnable) => { 
              return false
            })          
            cy.contains('Next').click() 
             
            cy.wait(8000)
        /* cy.get('#identifierId').type('YOUR_GMAIL_USERNAME').should('have.value', 'YOUR_GMAIL_USERNAME');
        cy.get('#identifierNext').click();
        cy.get('[name="password"]').type('YOUR_GMAIL_PASSWORD').should('have.value', 'YOUR_GMAIL_PASSWORD');
        cy.get('#passwordNext').click(); */
        // You can then assert that the login was successful and that your web app is loaded
        cy.url().should('include', 'YOUR_REDIRECT_URI')
      })
    })
  })
})