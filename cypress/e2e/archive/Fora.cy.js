


describe('Fora', () => {
  it('Login', () => {
   /*  app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*")
      res.header("Access-Control-Allow-Headers", "*")
      if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
        return res.status(200).json({})
      }
      next()
    }) */
    
    // First, make a POST request to the token endpoint to obtain an access token
const data = new URLSearchParams({
  grant_type: 'refresh_token',
                client_id: '806019697704-uobka2jkcp2c0v3uudu97u5d0pa7prn5.apps.googleusercontent.com',
                client_secret: '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',
                refresh_token: '1//04kRWM7oWANtmCgYIARAAGAQSNwF-L9IraBciyqNAowD7BgX1y8LVtuS5sLletwDUA0TLcJLG6mMQGybc4NctU9cDUPDOTP8x54k',
  
  redirect_uri: 'https://accounts.google.com/o/oauth2/auth/oauthchooseaccount',
  
});

fetch(' https://www.googleapis.com/oauth2/v2/userinfo', {
  method: 'POST',
  body: data,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
    
  }
})
.then(response => response.json())
.then(data => {
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
  .catch(error => console.error(error));
})
.catch(error => console.error(error));

    /* //cy.contains('Sign in with Fora Google').click()
    cy.contains('Sign in with your Fora email').click()
    cy.wait(8000)
  cy.origin('https://accounts.google.com', () => {
      cy.on('uncaught:exception', (err,runnable) => { 
         return false
        })          
  cy.get('#identifierId').clear().type('swetha.gotety@forastaging.net');  //Email entered
           cy.wait(1000)
            cy.get('#identifierNext').click({force: true})  //Next button clicked
            cy.get('#password').type('swethapadmini')
           cy.on('uncaught:exception', (err,runnable) => { 
              return false
            })          
            cy.contains('Next').click() 
             
            cy.wait(8000)
            //cy.reload()
            //cy.visit('https://advisor.forastaging.net/bookings')
            //cy.visit('https://accounts.google.com/signin/oauth/consent?authuser=0&part=AJi8hAO_laz4OKwS7D3v_ZGHYMaf0N94I2l-gfbp9UUs--Z_CrIwsY-EaLOT6YiQouRdw2CQZm2Jx9y8xxngrb8_AViXmhTqfzKaLOC_3pvNDgOxpbl4GeaEZz-OJrwp_6O1P6dlmzyBLG_KkUs8OWeWzhJ43dbmGogUTFVzSAXr3v57_D3dA0XvaXErklUIvmm9qp3biEyiDzjJwewcg7vM0w33B20Z0TJzKDi5zMa2tVnOQVpYBopDPUXhlkZp3JiQNh7kAvTibxF4p-UCKDH0ncOXkkfbuMfGjK9uZ0VIhq8NCtZwyJst4-8lrBcBqF1BlKZhBwcXWqdcO_QXOTJDiISHPmFH9H1tgCAlNDLpBw18EYxHzNGqvNFP68dHOIN3QvzGbsz3nn_X-JHxAUgW6Y1dAVHoq-s98ERUGJiaEza_VrkCRWUZi_52ncMw4vgH8WfZJvN8kW10R0k3uZl0ZcbFpndTc42-oSaUS7M_TxXqxWrRBRg&as=S1040778660%3A1682009300315736&client_id=7333014166-ikkimj2ulujusn52h7a1hfeha8olo2vk.apps.googleusercontent.com&rapt=AEjHL4OYxHTA-DUF0srYWVQCNNqLsfKY_TQc6ap4DK0zvB_it4SkHfv3ZXvrPqTJRJEZ2s87IbiDNk_Ijeu0LWe91v8OdrA5og#')
  */
          
//})
//cy.visit('https://accounts.google.com/signin/oauth/consent?authuser=0&part=AJi8hAO_laz4OKwS7D3v_ZGHYMaf0N94I2l-gfbp9UUs--Z_CrIwsY-EaLOT6YiQouRdw2CQZm2Jx9y8xxngrb8_AViXmhTqfzKaLOC_3pvNDgOxpbl4GeaEZz-OJrwp_6O1P6dlmzyBLG_KkUs8OWeWzhJ43dbmGogUTFVzSAXr3v57_D3dA0XvaXErklUIvmm9qp3biEyiDzjJwewcg7vM0w33B20Z0TJzKDi5zMa2tVnOQVpYBopDPUXhlkZp3JiQNh7kAvTibxF4p-UCKDH0ncOXkkfbuMfGjK9uZ0VIhq8NCtZwyJst4-8lrBcBqF1BlKZhBwcXWqdcO_QXOTJDiISHPmFH9H1tgCAlNDLpBw18EYxHzNGqvNFP68dHOIN3QvzGbsz3nn_X-JHxAUgW6Y1dAVHoq-s98ERUGJiaEza_VrkCRWUZi_52ncMw4vgH8WfZJvN8kW10R0k3uZl0ZcbFpndTc42-oSaUS7M_TxXqxWrRBRg&as=S1040778660%3A1682009300315736&client_id=7333014166-ikkimj2ulujusn52h7a1hfeha8olo2vk.apps.googleusercontent.com&rapt=AEjHL4OYxHTA-DUF0srYWVQCNNqLsfKY_TQc6ap4DK0zvB_it4SkHfv3ZXvrPqTJRJEZ2s87IbiDNk_Ijeu0LWe91v8OdrA5og#')
 

  }) 
})
  
