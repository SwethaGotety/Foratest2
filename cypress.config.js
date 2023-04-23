const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      
      
      on('task', {
        log(message) {
          console.log(message)

          return null
        },
      })
    },
    baseUrl: "http://admin.forastaging.net/",
    //baseURL : "http://localhost:54404/",
    //baseUrl: "http://localhost:3000",
    env: {
    
      //apiUrl: "http://localhost:3001",
      //"baseUrl": "http://localhost:3000",
      googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      googleClientId: process.env.REACT_APP_GOOGLE_CLIENTID,
      googleClientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
    },
  },
});
