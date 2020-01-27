import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    // Ga naar login scherm als er niet ingelogd is
    // if (!this.authService.isLoggedIn()) {
    //   this.router.navigate(["/login"]);
    //   return;
    // }

  }

}
