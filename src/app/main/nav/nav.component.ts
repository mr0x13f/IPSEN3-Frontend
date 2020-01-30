import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isAddjourney = false;
  isLivetracker = false;
  isOverview = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(
      (val) => {
        if (val) {
          let url = (<NavigationEnd> val).url;
          this.isAddjourney = url === "/main/addjourney";
          this.isLivetracker = url === "/main/livetracker";
          this.isOverview = url === "/main/overview";
        }
      });
  }

}
