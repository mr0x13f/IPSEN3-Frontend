import { Component, OnInit, Input } from '@angular/core';
import { Journey } from 'src/app/models/journey.model';

@Component({
  selector: 'app-overview-item',
  templateUrl: './overview-item.component.html',
  styleUrls: ['./overview-item.component.css']
})
export class OverviewItemComponent implements OnInit {
  @Input() journey: Journey;
  open = false;

  constructor() { }

  toggle() {
    this.open = !this.open;
  }

  ngOnInit() {
  }

}
