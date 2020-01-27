import { Component, OnInit } from '@angular/core';
import { Journey } from "../../../models/journey.model";
import { HttpService } from 'src/app/services/http.service';
import { map } from 'rxjs/internal/operators/map';
import { JourneyService } from 'src/app/services/journey.service';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project.model';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  journeys:Journey[] = [];
  projects:{[id:string]:Project} = {};
  sortByDate = true;

  constructor(
    private httpService:HttpService,
    private journeyService:JourneyService,
    private authService:AuthService,
    private projectService:ProjectService
  ) { }

  ngOnInit() {

    this.getJourneys();

  }

  changeSortByDate(){
    this.sortByDate = !this.sortByDate;
  }

  getJourneys() {

    this.journeyService.getJourneys(journeys => {
      this.journeys = journeys;

      for(let journey of this.journeys) {

        if (this.projects[journey.projectId] == null) {
  
          this.projectService.getProjectById(journey.projectId,
            (project) => {
              this.projects[journey.projectId] = project;
            })
        }
      }
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
