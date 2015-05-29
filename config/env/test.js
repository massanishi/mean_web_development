module.exports = {
    db: 'mongodb://localhost/mean-book-test',
    sessionSecret: 'developmentSessionSecret',
    viewEngine: 'ejs',
    facebook: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    }
};