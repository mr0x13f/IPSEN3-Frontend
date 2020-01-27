import { Component, OnInit } from '@angular/core';
import { Journey } from "../../../models/journey.model";
import { HttpService } from 'src/app/services/http.service';
import { map } from 'rxjs/internal/operators/map';
import { JourneyService } from 'src/app/services/journey.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  journeys:Journey[]
  sortByDate = true;

  constructor(
    private httpService:HttpService,
    private journeyService:JourneyService,
    private authService:AuthService
  ) { }

  ngOnInit() {

    this.getJourneys();

  }

  changeSortByDate(){
    this.sortByDate = !this.sortByDate;
  }

  getJourneys() {

    this.journeyService.getJourneys(journeys => {
      this.journeys = journeys
    });
    
  }

  removeListItem(journey: Journey) {
    for( let i = 0; i < this.journeys.length; i++) {
      if ( this.journeys[i] === journey) {
        this.journeys.splice(i, 1);
      }
    }
  }

}
