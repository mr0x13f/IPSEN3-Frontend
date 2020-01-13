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

  constructor(
    private httpService:HttpService,
    private journeyService:JourneyService,
    private authService:AuthService
  ) { }

  ngOnInit() {

    this.authService.login("nigerfagoot@gmail.com", "wachtwoord", () => {this.getJourneys();})

  }

  getJourneys() {
    let completed = (journeys) => {
      this.journeys = journeys;
    };

    this.journeyService.getJourneys(completed);
  }

  // journeys: Journey[] = [
  //   new Journey('235574', 40, 'Rotterdam', 'Klantenbezoek in de haven', '2019-11-02', '22-gg-kr', true, 5.20, 1.50, 0.19, '328483', '232487'),
  //   new Journey('235773', 12, 'Leiden', 'Klantenbezoek aan Digitale Factuur', '2019-11-06', '22-gg-kr', false, 10.00, 0.50, 0.19, '328483', '232487'),
  //   new Journey('235810', 28, 'Zoetermeer', 'Etentje met collegas', '2019-11-12', '22-gg-kr', false, 8.50, 0.00, 0.19, '328483', '232487'),
  //   new Journey('235116', 32, 'Hillegom', 'Inspectie', '2019-12-04', '22-gg-kr', true, 2.50, 0.00, 0.19, '328483', '232487'),

  //   new Journey('235574', 40, 'Rotterdam', 'Klantenbezoek in de haven', '2019-11-02', '22-gg-kr', true, 5.20, 1.50, 0.19, '328483', '232487'),
  //   new Journey('235773', 12, 'Leiden', 'Klantenbezoek aan Digitale Factuur', '2019-11-06', '22-gg-kr', false, 10.00, 0.50, 0.19, '328483', '232487'),
  //   new Journey('235810', 28, 'Zoetermeer', 'Etentje met collegas', '2019-11-12', '22-gg-kr', false, 8.50, 0.00, 0.19, '328483', '232487'),
  //   new Journey('235116', 32, 'Hillegom', 'Inspectie', '2019-12-04', '22-gg-kr', true, 2.50, 0.00, 0.19, '328483', '232487'),
  //   new Journey('235574', 40, 'Rotterdam', 'Klantenbezoek in de haven', '2019-11-02', '22-gg-kr', true, 5.20, 1.50, 0.19, '328483', '232487'),
  //   new Journey('235773', 12, 'Leiden', 'Klantenbezoek aan Digitale Factuur', '2019-11-06', '22-gg-kr', false, 10.00, 0.50, 0.19, '328483', '232487'),
  //   new Journey('235810', 28, 'Zoetermeer', 'Etentje met collegas', '2019-11-12', '22-gg-kr', false, 8.50, 0.00, 0.19, '328483', '232487'),
  //   new Journey('235116', 32, 'Hillegom', 'Inspectie', '2019-12-04', '22-gg-kr', true, 2.50, 0.00, 0.19, '328483', '232487'),
  //   new Journey('235574', 40, 'Rotterdam', 'Klantenbezoek in de haven', '2019-11-02', '22-gg-kr', true, 5.20, 1.50, 0.19, '328483', '232487'),
  //   new Journey('235773', 12, 'Leiden', 'Klantenbezoek aan Digitale Factuur', '2019-11-06', '22-gg-kr', false, 10.00, 0.50, 0.19, '328483', '232487'),
  //   new Journey('235810', 28, 'Zoetermeer', 'Etentje met collegas', '2019-11-12', '22-gg-kr', false, 8.50, 0.00, 0.19, '328483', '232487'),
  //   new Journey('235116', 32, 'Hillegom', 'Inspectie', '2019-12-04', '22-gg-kr', true, 2.50, 0.00, 0.19, '328483', '232487'),
  //   new Journey('235574', 40, 'Rotterdam', 'Klantenbezoek in de haven', '2019-11-02', '22-gg-kr', true, 5.20, 1.50, 0.19, '328483', '232487'),
  //   new Journey('235773', 12, 'Leiden', 'Klantenbezoek aan Digitale Factuur', '2019-11-06', '22-gg-kr', false, 10.00, 0.50, 0.19, '328483', '232487'),
  //   new Journey('235810', 28, 'Zoetermeer', 'Etentje met collegas', '2019-11-12', '22-gg-kr', false, 8.50, 0.00, 0.19, '328483', '232487'),
  //   new Journey('235116', 32, 'Hillegom', 'Inspectie', '2019-12-04', '22-gg-kr', true, 2.50, 0.00, 0.19, '328483', '232487'),
  //   new Journey('235574', 40, 'Rotterdam', 'Klantenbezoek in de haven', '2019-11-02', '22-gg-kr', true, 5.20, 1.50, 0.19, '328483', '232487'),
  //   new Journey('235773', 12, 'Leiden', 'Klantenbezoek aan Digitale Factuur', '2019-11-06', '22-gg-kr', false, 10.00, 0.50, 0.19, '328483', '232487'),
  //   new Journey('235810', 28, 'Zoetermeer', 'Etentje met collegas', '2019-11-12', '22-gg-kr', false, 8.50, 0.00, 0.19, '328483', '232487'),
  //   new Journey('235116', 32, 'Hillegom', 'Inspectie', '2019-12-04', '22-gg-kr', true, 2.50, 0.00, 0.19, '328483', '232487'),
  //   new Journey('235574', 40, 'Rotterdam', 'Klantenbezoek in de haven', '2019-11-02', '22-gg-kr', true, 5.20, 1.50, 0.19, '328483', '232487'),
  //   new Journey('235773', 12, 'Leiden', 'Klantenbezoek aan Digitale Factuur', '2019-11-06', '22-gg-kr', false, 10.00, 0.50, 0.19, '328483', '232487'),
  //   new Journey('235810', 28, 'Zoetermeer', 'Etentje met collegas', '2019-11-12', '22-gg-kr', false, 8.50, 0.00, 0.19, '328483', '232487'),
  //   new Journey('235116', 32, 'Hillegom', 'Inspectie', '2019-12-04', '22-gg-kr', true, 2.50, 0.00, 0.19, '328483', '232487'),
  //   new Journey('235574', 40, 'Rotterdam', 'Klantenbezoek in de haven', '2019-11-02', '22-gg-kr', true, 5.20, 1.50, 0.19, '328483', '232487'),
  //   new Journey('235773', 12, 'Leiden', 'Klantenbezoek aan Digitale Factuur', '2019-11-06', '22-gg-kr', false, 10.00, 0.50, 0.19, '328483', '232487'),
  //   new Journey('235810', 28, 'Zoetermeer', 'Etentje met collegas', '2019-11-12', '22-gg-kr', false, 8.50, 0.00, 0.19, '328483', '232487'),
  //   new Journey('235116', 32, 'Hillegom', 'Inspectie', '2019-12-04', '22-gg-kr', true, 2.50, 0.00, 0.19, '328483', '232487'),
  //   new Journey('235574', 40, 'Rotterdam', 'Klantenbezoek in de haven', '2019-11-02', '22-gg-kr', true, 5.20, 1.50, 0.19, '328483', '232487'),
  //   new Journey('235773', 12, 'Leiden', 'Klantenbezoek aan Digitale Factuur', '2019-11-06', '22-gg-kr', false, 10.00, 0.50, 0.19, '328483', '232487'),
  //   new Journey('235810', 28, 'Zoetermeer', 'Etentje met collegas', '2019-11-12', '22-gg-kr', false, 8.50, 0.00, 0.19, '328483', '232487'),
  //   new Journey('235116', 32, 'Hillegom', 'Inspectie', '2019-12-04', '22-gg-kr', true, 2.50, 0.00, 0.19, '328483', '232487'),
  //   new Journey('235574', 40, 'Rotterdam', 'Klantenbezoek in de haven', '2019-11-02', '22-gg-kr', true, 5.20, 1.50, 0.19, '328483', '232487'),
  //   new Journey('235773', 12, 'Leiden', 'Klantenbezoek aan Digitale Factuur', '2019-11-06', '22-gg-kr', false, 10.00, 0.50, 0.19, '328483', '232487'),
  //   new Journey('235810', 28, 'Zoetermeer', 'Etentje met collegas', '2019-11-12', '22-gg-kr', false, 8.50, 0.00, 0.19, '328483', '232487'),
  //   new Journey('235116', 32, 'Hillegom', 'Inspectie', '2019-12-04', '22-gg-kr', true, 2.50, 0.00, 0.19, '328483', '232487'),
  //   new Journey('235574', 40, 'Rotterdam', 'Klantenbezoek in de haven', '2019-11-02', '22-gg-kr', true, 5.20, 1.50, 0.19, '328483', '232487'),
  //   new Journey('235773', 12, 'Leiden', 'Klantenbezoek aan Digitale Factuur', '2019-11-06', '22-gg-kr', false, 10.00, 0.50, 0.19, '328483', '232487'),
  //   new Journey('235810', 28, 'Zoetermeer', 'Etentje met collegas', '2019-11-12', '22-gg-kr', false, 8.50, 0.00, 0.19, '328483', '232487'),
  //   new Journey('235116', 32, 'Hillegom', 'Inspectie', '2019-12-04', '22-gg-kr', true, 2.50, 0.00, 0.19, '328483', '232487')
  // ];
}
