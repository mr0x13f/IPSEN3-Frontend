import { Component, OnInit, ElementRef, NgModule, ViewChild, EventEmitter } from '@angular/core';
import { createSecureServer } from 'http2';
import { SourceListMap } from 'source-list-map';
import { FormsModule } from '@angular/forms';
import { WebDriverLogger } from 'blocking-proxy/built/lib/webdriver_logger';
import { User } from '../../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  onRegisterUser(){
    console.log("onRegisterFunctie");
    const name = this.nameInputRef.nativeElement.value;
    const email = this.emailInputRef.nativeElement.value;
    const password = this.passwordInputRef.nativeElement.value;
    const confirmPassword = this.confirmPasswordInputRef.nativeElement.value;

    const user = new User(email, name, password);

                          
    console.log(user.email + '\t' + user.name + '\t' + user.password);
  
    // if( this.confirmPasswordInputRef.nativeElement.value === this.confirmPasswordInputRef.nativeElement.value){
      const userJSON = JSON.stringify(user);
      console.log(userJSON);

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');


      this.http.post('http://localhost:8080/user/register',
                       userJSON, {headers: new HttpHeaders({

                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
                       })}).subscribe(responseData =>{
                         console.log(responseData);
                       });
    // }else{
    //   //todo Feedback geven
    // }
  }


}
