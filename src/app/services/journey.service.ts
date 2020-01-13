import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpService } from './http.service';
import { Journey } from '../models/journey.model';

@Injectable({providedIn: 'root'})

export class JourneyService {
    journeys: Journey[];

    constructor(private httpService:HttpService) {}

    public getJourneys(completed) {

      this.httpService.get("journeys")
      .pipe(map(response => {
        return <Journey[]> response;
      }))
      .subscribe(completed);

    }
}