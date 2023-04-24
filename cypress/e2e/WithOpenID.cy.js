describe('Fora', () => {

    //let callbackUrl = ''
    //let access_token =''
    it('Login', () => {

cy.request({
    method: 'POST',
    url: 'https://oauth2.googleapis.com/token',
    body: {
        username : 'swetha.gotety@forastaging.net',
        password : 'swethapadmini',
        grant_type: 'refresh_token',
        scope : 'https://www.googleapis.com/auth/userinfo.email openid https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/userinfo.profile',
        client_id: '806019697704-uobka2jkcp2c0v3uudu97u5d0pa7prn5.apps.googleusercontent.com',
        client_secret: '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',
        refresh_token: '1//04cANdyXMEkJgCgYIARAAGAQSNwF-L9IrY6rBMRdO0ZXsGf71AMsi2-BDorUbYVNyfTV2wgQpHjGStK8qYQL45rQ1zXfKUgwYRPI',
        redirect_uri: 'https://developers.google.com/oauthplayground'
    },  

}).then(({ body }) => {
    const { access_token, expires_in, id_token } = body
    
   // const { access_token, id_token } = body
   cy.log(body)
     const auth0state = {
        nonce : "",
        state : "some ransom state"
    } 

    //const callbackUrl = '/callback#access_token=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer&state=${auth0state.state}';

    const callbackUrl = `/callback#access_token=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer&state=${auth0state.state}`;
      
    /* cy.visit({
       
        url: callbackUrl,
        method: 'POST',
        body: {
        onBeforeLoad(win){
            //win.document.cookie = '.com.auth0.auth.some-random-state=${JSON.stringfy(auth0State)}'
            win.document.cookie = `.com.auth0.auth.some-random-state=${JSON.stringify(auth0state)}; path=/`
            

        } 
    }


    }) */
    window.document.cookie = `.com.auth0.auth.some-random-state=${JSON.stringify(auth0state)}; path=/`,
    cy.log(window.document.cookie),
    cy.visit(callbackUrl)
    /* cy.visit(callbackUrl, {
        onBeforeLoad(win) {
          //win.document.cookie = '.com.auth0.auth.some-random-state=${JSON.stringfy(auth0State)}'
          win.document.cookie = `.com.auth0.auth.some-random-state=${JSON.stringify(auth0state)}; path=/`
        }
      });
       */


}

)


    })

})