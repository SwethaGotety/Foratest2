describe('Fora', () => {
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
                redirect_uri: 'https://developers.google.com/oauthplayground'
            },            
          }).then(({ body }) => {
            const { access_token, id_token } = body
            //cy.visit('https://admin.forastaging.net/login/?next=/'),
            //cy.contains('Sign in with Fora Google').click()

            cy.request({
              method: 'GET',
              url : 'https://www.googleapis.com/oauth2/v2/userinfo',
              //url: 'https://www.googleapis.com/userinfo/v2/me',
              headers: { Authorization: `Bearer ${access_token}` },
            }).then(({ body }) => {
              cy.log(body)
              const userItem = {
                token: id_token,
                user: {
                  googleId: body.sub,
                  email: body.email,
                  password: body.password,
                  givenName: body.given_name,
                  familyName: body.family_name,
                  imageUrl: body.picture,
                  
                },
                
              }              
              cy.getAllLocalStorage('access_token', access_token);
              cy.getAllLocalStorage('token_type', 'Bearer');
             
              
              
              //window.localStorage.setItem('googleCypress', JSON.stringify(userItem))
              //expect(localStorage.getItem('googleCypress')).not.null
              //cy.setLocalStorage('accessToken', body.accessToken)
              //window.localStorage.setItem('accessToken',  body.data.data.accessToken);
              //cy.setCookie('OauthAccessToken',access_token)
              //cy.visit('https://accounts.google.com/o/oauth2/auth/oauthchooseaccount');
              cy.visit('https://accounts.google.com/o/oauth2/auth/identifier')
              cy.visit('https://admin.forastaging.net/oauth2/authorize?client_id=806019697704-uobka2jkcp2c0v3uudu97u5d0pa7prn5.apps.googleusercontent.com&redirect_uri=accounts.google.com&response_type=code&scope=')
             // cy.visit('/supplier-program/')
              
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
