import { Component, OnInit, ElementRef, NgModule, ViewChild, EventEmitter } from '@angular/core';
import { createSecureServer } from 'http2';
import { SourceListMap } from 'source-list-map';
import { FormsModule } from '@angular/forms';
import { WebDriverLogger } from 'blocking-proxy/built/lib/webdriver_logger';
import { User } from '../../models/user.model';

@NgModule({
  imports:[
    FormsModule
  ]
})

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('nameInput',{static: false}) nameInputRef: ElementRef;
  @ViewChild('emailInput',{static: false}) emailInputRef: ElementRef;
  @ViewChild('passwordInput',{static: false}) passwordInputRef: ElementRef;
  @ViewChild('confirmPasswordInput',{static: false}) confirmPasswordInputRef: ElementRef;
  user = new EventEmitter<User>();


  constructor() { }

  ngOnInit() {
  }

  onRegisterUser(){
    const name = this.nameInputRef.nativeElement.value;
    const email = this.emailInputRef.nativeElement.value;
    const password = this.passwordInputRef.nativeElement.value;
    const confirmPassword = this.confirmPasswordInputRef.nativeElement.value;

    const user = new User(email, name, password);

                          
    console.log(user.email + '\t' + user.name + '\t' + user.password);
    
    if( this.confirmPasswordInputRef.nativeElement.value === this.confirmPasswordInputRef.nativeElement.value){
    }else{
      //todo Feedback geven
    }
  }


}
