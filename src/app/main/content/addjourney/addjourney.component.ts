import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { Journey } from 'src/app/models/journey.model';
import { DatePipe } from '@angular/common';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { MatDialog } from '@angular/material';
import { JourneyConfirmSavedComponent } from './journey-confirm-saved/journey-confirm-saved.component';
import { ActivatedRoute } from '@angular/router';

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
  projects:Project[];
  livetrackerKilometers = "";

  constructor(
    private route:ActivatedRoute,
    private httpservice: HttpService,
    private datePipe: DatePipe,
    private projectService: ProjectService,
    private dialog: MatDialog
  ){}

  ngOnInit() {
    this.createFormGroup();
    this.getLicenseplate();
    this.getRate();
    this.loadProjects();
    this.loadLivetrackerValue();
  }

  loadLivetrackerValue() {

    this.livetrackerKilometers = this.route.snapshot.params["kilometers"] || "";

  }

  loadProjects() {
    this.projectService.listProjects(projects => {
      this.projects = projects;
    })
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
      data => {
        this.journeySavedPopup();
      },
      err => {},
      () => {}

    );
    this.saveLicenseplate(postData.licensePlate);
    this.saveRate(postData.rate);
    

    this.projectForm.reset();
    this.projectForm.markAsPristine();
    this.projectForm.markAsUntouched();
    this.projectForm.updateValueAndValidity();

    this.getLicenseplate();
    this.getRate();

   }

   journeySavedPopup(){

    this.dialog.open(JourneyConfirmSavedComponent);
   }
}
