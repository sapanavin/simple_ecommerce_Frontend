import { Component, Inject, OnInit } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import OktaSignIn from '@okta/okta-signin-widget';

import myAppConfig from '../../config/my-app-config';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  oktaSignin: any;
  router:any;

  constructor(@Inject(OKTA_AUTH) private oktaAuth: OktaAuth,
  router:Router) {
      this.router=router;
    this.oktaSignin = new OktaSignIn({
      logo: 'assets/images/logo.png',
      baseUrl: myAppConfig.oidc.issuer.split('/oauth2')[0],
      clientId: myAppConfig.oidc.clientId,
      redirectUri: myAppConfig.oidc.redirectUri,
      authParams: {
        pkce: true,
        issuer: myAppConfig.oidc.issuer,
        scopes: myAppConfig.oidc.scopes
      }
    });
   }

  ngOnInit(): void {
      console.log(this.oktaSignin);
    console.log("from ngOnInit in okta login component");
    this.oktaSignin.remove();

    this.oktaSignin.renderEl({ 

      el: '#okta-sign-in-widget'}, // this name should be same as div tag id in login.component.html
      
      (response: any) => {
        if (response.status === 'SUCCESS') {
          console.log("from response in okta login component",response);
          //this.oktaAuth.signInWithRedirect();;
          const token = this.oktaAuth.getAccessToken();
          //console.log(token);
          this.router.navigate(['products']);
          
         // this.oktaAuth.handleLoginRedirect();
         //this.oktaAuth.signInWithRedirect()
        }
      },
      (error: any) => {
        console.log("from errror in okta login component",error);
        throw error;
      }
    );
    console.log("from oktaSignin.renderEl in okta login component");
    //console.log(this.oktaSignin);
  }

}
