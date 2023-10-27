export default {

    oidc: {
        clientId: '0oa6u9htmzJUqxIyP5d7',
        issuer: 'https://dev-37342367.okta.com/oauth2/default',
       redirectUri: 'https://simpleecommerce-2aa1a.web.app/login/callback',//for Production Enviorment
        //redirectUri: 'http://localhost:4200/login/callback',//for local enviorment
        scopes: ['openid', 'profile', 'email']
    }

}
