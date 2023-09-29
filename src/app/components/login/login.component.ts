import { Component, Inject, OnInit } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import OktaSignIn from '@okta/okta-signin-widget';

import myAppConfig from '../../config/my-app-config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  oktaSignin: any;
  router:Router;

  constructor(router:Router) {
    this.router=router;
  }
   ngOnInit() {
    
  }

  onClickSubmit(form: any):void{
    this.router.navigateByUrl('/members');
    console.log("From submitting the form ----------------",form)

  }
}
