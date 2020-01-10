import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from 'events';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../entry.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('email', { static: false}) emailInput: ElementRef;
  @ViewChild('password', { static: false}) passwordInput: ElementRef;


  constructor(
    private authService:AuthService,
    private router: Router
  ) { }

  
  @Output() valueChange = new EventEmitter();

  ngOnInit() {
  }
  
  onLogin(){
    const email = this.emailInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;

    this.authService.login(email, password,
      () => {
        // goed
        console.log("Login succeeded");
        this.router.navigate(['/main']);

      },
      error => {
        // fout
        console.log("email " + email);
        console.log("wachtwoord " + password);
        console.log("faggot");
        console.log(this.authService.user);
      }
    )
  }

  autoLogin(){
    this.authService.login("nigerfagoot@gmail.com", "wachtwoord",
      () => {
        // goed
        console.log("Login succeeded");
        this.router.navigate(['/main']);

      }
    )
  }
}
