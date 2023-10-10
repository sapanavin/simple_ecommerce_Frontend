import { AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginStatusComponent } from './components/login-status/login-status.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
 
  title = 'Rainbow Shopping';
  @ContentChild("rightpos1") rightpos1!: ElementRef ;
  @ViewChild('myNavbar') MyNavbar!: LoginStatusComponent;
  
 // public screenWidth: any;

 // public screenHeight: any;
  myNavbar: any;
  ngOnInit(): void {
    //this.screenWidth = window.innerWidth;
  }  
  ngAfterViewInit(): void {

    //console.log("afterinit");
  
  }
  showNavbar1(){
    
    //console.log(' From App.ts Inside showNavbar1()');
    this.MyNavbar.showNavbar();
   
  }
  
}
