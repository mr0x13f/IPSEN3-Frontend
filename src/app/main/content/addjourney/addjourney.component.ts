import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';
import { Journey } from 'src/app/models/journey.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addjourney',
  templateUrl: './addjourney.component.html',
  styleUrls: ['./addjourney.component.css']
})

export class AddjourneyComponent implements OnInit {
  projectForm: FormGroup;
  responseStatus:Object= [];
  status:boolean ;
  licensePlate: string;


  constructor(private http: HttpClient,
    private httpservice: HttpService,
    private datePipe: DatePipe
    ){}

  ngOnInit() {
    this.createFormGroup();
    this.getLicenseplate();
  }

  

  sanitizeDate(date:Date): string {

    return this.datePipe.transform(date, "yyyy-MM-dd") + " 00:00:00.000";

  }


  createFormGroup(){
    this.projectForm = new FormGroup({
      'journeyId' : new FormControl(null),
      'kilometers' : new FormControl(null, [Validators.required]),
      'destination' : new FormControl(null, Validators.required),
      'description' : new FormControl(null),
      'date' : new FormControl(null, Validators.required),
      'licensePlate' : new FormControl(null, Validators.required),
      'isBilled' : new FormControl (false),
      'parkingCost' : new FormControl(null),
      'otherCost' : new FormControl(null),
      'rate' : new FormControl(null, [Validators.required]),
      'projectId' : new FormControl(null, Validators.required),
      'creatorId' : new FormControl(null)
    });
  }

  getLicenseplate(){
    if(localStorage.getItem('licensePlate')){
      console.log('setvalue')
      this.projectForm.get('licensePlate').setValue(localStorage.getItem('licensePlate'))

    }
  }

  saveLicenseplate(licensePlate: string){
    if(localStorage.getItem('licensePlate')) {
      localStorage.removeItem('licensePlate')
    }
    localStorage.setItem('licensePlate', licensePlate);

  }


  onSaveJourney(postData: { kilometers: number;
                            date: Date;
                            rate: number;
                            parkingCost: number;
                            otherCost: number;
                            destination: string;
                            projectId: string;
                            licensePlate: string;
                            description: string}){

    console.log("DITTTUUU "+ postData.destination);

    let dateString = this.sanitizeDate(postData.date);

    let postJourney = new Journey(
      "",
      Number(postData.kilometers),
      postData.destination || "",
      postData.description || "",
      dateString || "",
      postData.licensePlate || "",
      false,
      Number(postData.parkingCost),
      Number(postData.otherCost),
      Number(postData.rate),
      postData.projectId,
      ""
    );

    this.httpservice.post("journey", postJourney)
    .subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('Request Completed')


    );
    this.saveLicenseplate(postData.licensePlate);
    this.projectForm.reset();
    this.getLicenseplate();


   }



}
