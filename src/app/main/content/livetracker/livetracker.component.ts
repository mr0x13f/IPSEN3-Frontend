import { Component, OnInit, OnDestroy } from '@angular/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { HttpService } from 'src/app/services/http.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livetracker',
  templateUrl: './livetracker.component.html',
  styleUrls: ['./livetracker.component.css']
})
export class LivetrackerComponent implements OnInit, OnDestroy {

  isTracking: boolean = false;
  interval;
  coordinatesList: Coordinates[] = [];
  locationInterval = 10 * 1000;

  constructor(
    private router:Router,
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

    this.saveLocation();
    
    this.interval = setInterval( () => { this.saveLocation(); }, this.locationInterval);
  
  }

  saveLocation() {
      
    navigator.geolocation.getCurrentPosition((position) => {
        console.log("PUSH POS");
        this.coordinatesList.push(position.coords);
    })

  }

  stopTracking() {

    clearInterval(this.interval);

    console.log(this.coordinatesList);

    let totalDistance = this.calculateTotalDistance();

    this.router.navigate(["/main/addjourney/", totalDistance]);

  }

  calculateTotalDistance() {

    let distance = 0;

    for (let i = 1; i<this.coordinatesList.length; i++) {

       let coord1 = this.coordinatesList[i-1];
       let coord2 = this.coordinatesList[i];
       distance += this.calculateDistance(coord1, coord2);

    }

    return distance;

  }

  calculateDistance(coord1:Coordinates, coord2:Coordinates) {
    var p = 0.017453292519943295;
    var c = Math.cos;
    var a = 0.5 - c((coord2.latitude - coord1.latitude) * p)/2 + 
            c(coord1.latitude * p) * c(coord2.latitude * p) * 
            (1 - c((coord2.longitude - coord1.longitude) * p))/2;
  
    return 12742 * Math.asin(Math.sqrt(a));
  }

  ngOnDestroy() {

    clearInterval(this.interval);

  }

}
