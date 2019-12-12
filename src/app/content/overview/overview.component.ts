import { Component, OnInit } from '@angular/core';
import { Journey } from "src/app/models/journey.model";


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  journeys: Journey[] = [
    new Journey('235574', 40, 'Rotterdam', 'Klantenbezoek in de haven', '2019-11-02', '22-gg-kr', true, 5.20, 1.50, 0.19, '328483', '232487'),
    new Journey('235773', 12, 'Leiden', 'Klantenbezoek aan Digitale Factuur', '2019-11-06', '22-gg-kr', false, 10.00, 0.50, 0.19, '328483', '232487'),
    new Journey('235810', 28, 'Zoetermeer', 'Etentje met collegas', '2019-11-12', '22-gg-kr', false, 8.50, 0.00, 0.19, '328483', '232487')
  ];
}
