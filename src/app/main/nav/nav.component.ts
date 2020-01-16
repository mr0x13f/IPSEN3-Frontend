import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  currentPage = 2;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }


  //deze functie kan naar een andere componenent verplaatst worden
  onLogout(){
    this.authService.clearAuth();
    this.router.navigate(['/auth'])
  }
}
