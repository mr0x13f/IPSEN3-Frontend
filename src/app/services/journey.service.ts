import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpService } from './http.service';
import { Journey } from '../models/journey.model';

@Injectable({providedIn: 'root'})

export class JourneyService {
    journeys: Journey[];

    constructor(private httpService:HttpService) {}

    public getJourneys(completed) {

      this.httpService.get("journey")
      .pipe(map(response => {
        return <Journey[]> response;
      }))
      .subscribe(completed);

    }

    public getTotalCost(journey:Journey): number {

      return journey.kilometers * journey.rate + journey.parkingCost + journey.otherCost;

  }

  public deleteJourney(journeyId, completed) {
    this.httpService.delete("journey/"+journeyId)
    .subscribe(completed)
  }
}