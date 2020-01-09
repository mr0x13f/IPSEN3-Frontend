import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService:AuthService
  ) { }
  
  @Output() valueChange = new EventEmitter();

  ngOnInit() {
  }
  
  onLogin(){
    console.log("hallo?")
    this.authService.login("nigerfagoot@gmail.com", "wachtwoord",
      () => {
        // goed
        console.log("Lekker man");
      },
      error => {
        // fout
        console.log("faggot");
      }
    )
  }
}
