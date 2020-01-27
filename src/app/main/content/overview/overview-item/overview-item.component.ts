import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Journey } from 'src/app/models/journey.model';
import { JourneyService } from 'src/app/services/journey.service';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-overview-item',
  templateUrl: './overview-item.component.html',
  styleUrls: ['./overview-item.component.css']
})
export class OverviewItemComponent implements OnInit {
  @Input() journey: Journey;
  @Input() project: Project;
  open = false;
  confirmOpen = false;

  @Output("remove") removeEvent = new EventEmitter<Journey>();

  constructor(
    public journeyService:JourneyService
  ) { }

  toggle() {
    if((<Element>event.target).className === 'container'){
      return
    }
    if((<Element>event.target).className ==='delete-button'){
      return
    }
    if((<Element>event.target).className ==='confirm-button'){
      return
    }
    
    this.open = !this.open;
  }

  confirm() {
    this.open = !this.open;
    this.confirmOpen = !this.confirmOpen;
  }

  removeJourney(){
    let confirm = this.confirm;
    this.journeyService.deleteJourney(this.journey.journeyId, confirm);
    this.removeEvent.emit(this.journey);
  }

  ngOnInit() {
  }

}
