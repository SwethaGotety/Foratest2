describe('Fora', () => {
    let access_token = ''
    let userId = ''
    
    it('Login', () => {

        cy.request({
            method: 'POST',
            url: 'https://oauth2.googleapis.com/token',
            
            
            body: {
                username : 'swetha.gotety@forastaging.net',
                password : 'swethapadmini',
                grant_type: 'refresh_token',
                client_id: '806019697704-uobka2jkcp2c0v3uudu97u5d0pa7prn5.apps.googleusercontent.com',
                client_secret: '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',
                refresh_token: '1//04PLHWWAczVwRCgYIARAAGAQSNwF-L9Ir250CZ0hQny-vAF1mwWmzdoNWN3K9zC7TWcm_Fl8ituRMien23GCqXIw3Cimyr4vUQcw',
            }, 

          }).then( response => {
            
            cy.log(JSON.stringify(response)),
            cy.log(response.body.access_token),
            access_token = response.body.access_token,
            
            cy.request({
              method: 'GET',
              url : 'https://www.googleapis.com/oauth2/v2/userinfo',
              //url: 'https://www.googleapis.com/userinfo/v2/me',
              headers: { Authorization: `Bearer ${access_token}` },
            }).then( response  => {
              
                cy.log(response.body),
                userId = response.body.email,
                cy.log("user id "+ userId)
                cy.request({
                    method: 'POST',
                    url : 'http://admin.forastaging.net/',
                    //url: 'https://www.googleapis.com/userinfo/v2/me',
                    headers: { Authorization: `Bearer ${access_token}` },
                })
                cy.visit("/")
              
              /* window.localStorage.setItem('googleCypress', JSON.stringify(userItem))
              expect(localStorage.getItem('googleCypress')).not.null
              //cy.setLocalStorage('accessToken', body.accessToken)
              //window.localStorage.setItem('accessToken',  body.data.data.accessToken);
              cy.setCookie('OauthAccessToken',access_token)
              cy.visit */
              
            })
          
          
          
          
          /* //workingpart
          .then(({ body }) => {
            const { id_token } = body
              cy.request('GET', 'https://admin.forastaging.net/', { jwt: id_token })
                    .then( ({ body: accessToken }) => {
                  //cy.setCookie('trello_token', accessToken)
                                  
                }) */
                 

          })

    })

})
