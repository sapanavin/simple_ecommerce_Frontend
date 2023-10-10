import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit, AfterViewInit{

  //Content Child
  @ViewChild("rightpos") rightpos!  : ElementRef;
    
  ngAfterViewInit(): void {

    //Content Child
    console.log(this.rightpos);
    //this.rightpos.nativeElement.setAttribute('style','color: blue');
    
  }
  showNavbar(){
    
    console.log(" inside showNavbar()");
    this.rightpos.nativeElement.style.backgroundColor="white";
    if(this.rightpos.nativeElement.style.right === '-300px'){
          this.rightpos.nativeElement.style.right=0;
          this.rightpos.nativeElement.style.backgroundColor="white";
    }
    else{
     
      this.rightpos.nativeElement.style.right='-300px';
      
    }
    
   
  }

  isAuthenticated: boolean = false;
  userFullName: string = '';

  storage: Storage = sessionStorage;

  constructor(private oktaAuthService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth) { }

  ngOnInit(): void {

    // Subscribe to authentication state changes
    this.oktaAuthService.authState$.subscribe(
      (result) => {
        this.isAuthenticated = result.isAuthenticated!;
        this.getUserDetails();
      }
    );
  }
  
  getUserDetails() {
    if (this.isAuthenticated) {

      // Fetch the logged in user details (user's claims)
      //
      // user full name is exposed as a property name
      this.oktaAuth.getUser().then(
        (res) => {
          this.userFullName = res.name as string;

          //retrieve the user's email from authentication response
          const theEmail = res.email;

          //now store the email in browser storage
          this.storage.setItem('userEmail', JSON.stringify(theEmail));
        }
      );
    }
  }

  logout() {
    // Terminates the session with Okta and removes current tokens.
    this.oktaAuth.signOut();
  }

} 