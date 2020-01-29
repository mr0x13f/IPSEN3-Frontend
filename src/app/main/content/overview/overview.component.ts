import { Component, OnInit } from '@angular/core';
import { Journey } from "../../../models/journey.model";
import { JourneyService } from 'src/app/services/journey.service';
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
  selectedProject: string = null;

  constructor(
    private journeyService:JourneyService,
    private projectService:ProjectService
  ) { }

  ngOnInit() {

    this.getJourneys();

  }

  changeSortByDate(){
    this.sortByDate = !this.sortByDate;
    this.getJourneys();
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
