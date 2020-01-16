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
    // console.log((<Element>event.target).className)
    this.open = !this.open;
  }

  confirm() {
    this.confirmOpen = !this.confirmOpen;
  }

  ngOnInit() {
  }

}
