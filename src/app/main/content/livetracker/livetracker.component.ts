import { Component, OnInit } from '@angular/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-livetracker',
  templateUrl: './livetracker.component.html',
  styleUrls: ['./livetracker.component.css']
})
export class LivetrackerComponent implements OnInit {

  isTracking: boolean = false;

  constructor() { }

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
    // start tracking
  }

  stopTracking() {
    // stop tracking
  }

}
