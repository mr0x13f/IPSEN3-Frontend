import { Component, OnInit, Input } from '@angular/core';
import { Journey } from 'src/app/models/journey.model';
import { JourneyService } from 'src/app/services/journey.service';

@Component({
  selector: 'app-overview-item',
  templateUrl: './overview-item.component.html',
  styleUrls: ['./overview-item.component.css']
})
export class OverviewItemComponent implements OnInit {
  @Input() journey: Journey;
  open = false;
  confirmOpen = false;

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

    console.log((<Element>event.target).className)
    this.open = !this.open;
  }

  confirm() {
    console.log("Dit werkt!!!!!!!!");
    this.open = !this.open;
    this.confirmOpen = !this.confirmOpen;
  }

  removeJourney(){

    let confirm = this.confirm;

    console.log('Journey ID: ' + this.journey.journeyId);
    this.journeyService.deleteJourney(this.journey.journeyId, confirm);
  }

  ngOnInit() {
  }

}
