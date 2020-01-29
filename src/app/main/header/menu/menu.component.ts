import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router:Router,
    private authService:AuthService
  ) { }

  ngOnInit() {
  }

  onLogout() {

    this.authService.clearAuth();
    this.router.navigate(["/auth"]);

  }

}
