import { Component, OnInit } from '@angular/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { HttpService } from 'src/app/services/http.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-livetracker',
  templateUrl: './livetracker.component.html',
  styleUrls: ['./livetracker.component.css']
})
export class LivetrackerComponent implements OnInit {

  isTracking: boolean = false;

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit() {
  }

  toggleTracking() {
    this.isTracking = !this.isTracking;

    if (this.isTracking) {
      this.startTracking();
    } else {
      this.stopTracking();
    }
  }

  startTracking() {
  
  }

  stopTracking() {

  }

}
