import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomValidators } from './custom-validators';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';
import { Journey } from 'src/app/models/journey.model';
import { AuthService } from 'src/app/services/auth.service';
import { getLocaleDateTimeFormat, DatePipe } from '@angular/common';

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
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
    ){}

  ngOnInit() {
    this.createFormGroup();
    this.getLicenseplate();
    this.getRate();

    // this.onBuildFormGroup();
  }

  onBuildFormGroup(){
    this.projectForm = this.formBuilder.group({
      kilometers : ['', [Validators.required]],
      date : ['', [Validators.required]],
      rate : ['', [Validators.required]],
      parkcosts : [''],
      othercosts : [''],
      destiny : ['', [Validators.required]],
      project : ['', [Validators.required]],
      licenseplate : ['', [Validators.required]],
      description : ['']
    })
  }

  // sanitizeDate(date: string): string {
  //   if (!date) {
  //     return null;
  //   }
  //   const dataArray = date.toString().split('-');
  //   const month = Number(dataArray[0]) - 1;
  //   const day = Number(dataArray[1]);
  //   const year = Number(dataArray[2]);
  //   const ISOString = (new Date(year, month, day)).toISOString();
  //   return ISOString;
  // }

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

  getRate(){
    if(localStorage.getItem('rate')){
      this.projectForm.get('rate').setValue(localStorage.getItem('rate'))
    }
  }

  saveRate(rate: number){
    if(localStorage.getItem('rate')){
      localStorage.removeItem('rate');
    }
    localStorage.setItem('rate', String(rate))
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
    this.saveRate(postData.rate)
    this.projectForm.reset();
    this.getLicenseplate();
    this.getRate();


   }



}
