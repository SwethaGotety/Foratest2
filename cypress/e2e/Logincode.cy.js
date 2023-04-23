describe('Fora', () => {
    it('Login', () => {
        let identity

        const CLIENT_ID = '806019697704-uobka2jkcp2c0v3uudu97u5d0pa7prn5.apps.googleusercontent.com'
        const CLIENT_SECRET = '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'
        const REFRESH_TOKEN = '1//04FvnYN79qLUvCgYIARAAGAQSNwF-L9Ir2rjcd3zPEmIF-H_9jsoTmEsTnqGjKkWaXeO93oaGQyGF7frUvzVrsvX62dSS467hzeY'
        const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
       // const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
        //oAuth2Client.setcredentials({ refresh_token: REFRESH_TOKEN})

        cy.visit('https://admin.forastaging.net/login/')
        cy.contains('Sign in with Fora Google').click()
        cy.wait(8000)
        

        cy.request({
            method: 'POST',
            url: 'https://developers.google.com/oauthplayground/',
            //url: 'https://www.accounts.google.com/o/oauth2/auth',
            
            body: {
                grant_type: 'refresh_token',
                client_id: Cypress.env('googleClientId'),
                client_secret: Cypress.env('googleClientSecret'),
                refresh_token: Cypress.env('googleRefreshToken'),
            },            
          })
          
          cy.request({
            method: 'GET',
            //url: 'https://developers.google.com/oauthplayground/',
            url: 'https://admin.forastaging.net/login/',
            
            body: {
                grant_type: 'refresh_token',
                client_id: Cypress.env('googleClientId'),
                client_secret: Cypress.env('googleClientSecret'),
                refresh_token: Cypress.env('googleRefreshToken'),
                 accessToken : 'ya29.a0Ael9sCOhBApzS1Ze5_Asr9VHVlAPORig24jjnDG5SS-CvrxsfPY8N6CewyXMxbMBu7x7T2_YDQneY_suoQnQsW_K_KKpKnClNbY8BmtwtSly_pqRxzR9ChxjEZy154si7HK6aZW5vg-eGAMtOCFGIrZQ-UrLaCgYKATQSARISFQF4udJhBzyYPVDX5BNXnj3f9hDSlg0163',
                 id_token : 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg2OTY5YWVjMzdhNzc4MGYxODgwNzg3NzU5M2JiYmY4Y2Y1ZGU1Y2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI0MDc0MDg3MTgxOTIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0MDc0MDg3MTgxOTIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTMyMDY0NjA4NTAzMzQ0MTY2NzkiLCJoZCI6ImZvcmFzdGFnaW5nLm5ldCIsImVtYWlsIjoic3dldGhhLmdvdGV0eUBmb3Jhc3RhZ2luZy5uZXQiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6ImxwZk1IMmxQdnRPV2lrSVUwRmNaYmciLCJuYW1lIjoiU3dldGhhIEdvdGV0eSIsImdpdmVuX25hbWUiOiJTd2V0aGEiLCJmYW1pbHlfbmFtZSI6IkdvdGV0eSIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjgyMjM0MTQ1LCJleHAiOjE2ODIyMzc3NDV9.qtPxdePg-tAFhI-YEco300egfJ0bRuD4gOiwJoPaAaLx00BiHPyrg04_PoNJm7a2RYTbmzFNzyii0fOL5SQNXl37yjOfe5jW3_yP54vU_8ATUqX1pkMVEdD71zxn-lLA9NIY_Pq_Mpn2oR-iyPmgb8-8PkAzPHUp2gDCMO7zJk2ptcy2m4C5EYar-df6NM47ODeGRpipEQy22Bnp0oKE4vJ3VvG5Mp_b8yqWNoIwX_-QrkdGO8pgf_HF7R_tQ6DtzPdR6M99miA2Ln6NLcOXjFl3o9GMISRZnMCmaZLF_Mv2fh95-WictIeI_zhZPg3NeJPgP9hdS8YypMnBILTKvw'
            },            
          })
          cy.visit('https://admin.forastaging.net/user/')
          
          /* .its('body')
          .then((response) => {
              identity = response
              window.localStorage.setItem('identity', JSON.stringify(identity))
              cy.log(identity.access_token)
          })
           */
          
         /*  .then(({ body }) => {
             accessToken : 'ya29.a0Ael9sCOhBApzS1Ze5_Asr9VHVlAPORig24jjnDG5SS-CvrxsfPY8N6CewyXMxbMBu7x7T2_YDQneY_suoQnQsW_K_KKpKnClNbY8BmtwtSly_pqRxzR9ChxjEZy154si7HK6aZW5vg-eGAMtOCFGIrZQ-UrLaCgYKATQSARISFQF4udJhBzyYPVDX5BNXnj3f9hDSlg0163',
             id_token : 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg2OTY5YWVjMzdhNzc4MGYxODgwNzg3NzU5M2JiYmY4Y2Y1ZGU1Y2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI0MDc0MDg3MTgxOTIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0MDc0MDg3MTgxOTIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTMyMDY0NjA4NTAzMzQ0MTY2NzkiLCJoZCI6ImZvcmFzdGFnaW5nLm5ldCIsImVtYWlsIjoic3dldGhhLmdvdGV0eUBmb3Jhc3RhZ2luZy5uZXQiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6ImxwZk1IMmxQdnRPV2lrSVUwRmNaYmciLCJuYW1lIjoiU3dldGhhIEdvdGV0eSIsImdpdmVuX25hbWUiOiJTd2V0aGEiLCJmYW1pbHlfbmFtZSI6IkdvdGV0eSIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjgyMjM0MTQ1LCJleHAiOjE2ODIyMzc3NDV9.qtPxdePg-tAFhI-YEco300egfJ0bRuD4gOiwJoPaAaLx00BiHPyrg04_PoNJm7a2RYTbmzFNzyii0fOL5SQNXl37yjOfe5jW3_yP54vU_8ATUqX1pkMVEdD71zxn-lLA9NIY_Pq_Mpn2oR-iyPmgb8-8PkAzPHUp2gDCMO7zJk2ptcy2m4C5EYar-df6NM47ODeGRpipEQy22Bnp0oKE4vJ3VvG5Mp_b8yqWNoIwX_-QrkdGO8pgf_HF7R_tQ6DtzPdR6M99miA2Ln6NLcOXjFl3o9GMISRZnMCmaZLF_Mv2fh95-WictIeI_zhZPg3NeJPgP9hdS8YypMnBILTKvw',
            const { id_token } = body
              cy.request('POST', '/api/login', { jwt: id_token })
                .then( ({ body: accessToken }) => {
                  cy.setCookie('trello_token', accessToken)
                })
          })
           */
          
          
          /* 
          .then( ({ status }) => {
            expect(status).to.eq(200)
          }).then(body => {
            // Once we have obtained the access token, we can use it to launch the app URL
            const accessToken = body.access_token
            cy.log(accessToken)
          }) */
          
          /* 
           */
          /* .then(data => {
            // Once we have obtained the access token, we can use it to launch the app URL
            const accessToken = data.access_token
            const appUrl = 'https://admin.forastaging.net/login'
            const headers = {
              'Authorization': `Bearer ${accessToken}`
            };
          
            fetch(appUrl, {
              method: 'POST',
              headers: headers
            })
            .then(response => {

              if (response.ok) {
                console.log('App launched successfully!');
              } else {
                console.error('Failed to launch app.');
              }
            })
          
          
          
           */
          
         
          
          
                  }) 
                }) 
                

    

    