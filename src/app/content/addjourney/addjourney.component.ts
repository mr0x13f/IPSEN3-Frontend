import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/main/content/addjourney/custom-validators';

@Component({
  selector: 'app-addjourney',
  templateUrl: './addjourney.component.html',
  styleUrls: ['./addjourney.component.css']
})


export class AddjourneyComponent implements OnInit {
  projectForm: FormGroup;

  

  ngOnInit() {
    this.projectForm = new FormGroup({
      'kilometers' : new FormControl(null, [Validators.required, CustomValidators.invalidNumeric]),
      'date' : new FormControl(null, Validators.required),
      'rate' : new FormControl(null, [Validators.required, CustomValidators.invalidNumeric]),
      'parkcosts' : new FormControl(null, CustomValidators.invalidNumeric),
      'othercosts' : new FormControl(null, CustomValidators.invalidNumeric),
      'destiny' : new FormControl(null, Validators.required),
      'project' : new FormControl(null, Validators.required),
      'licenseplate' : new FormControl(null, Validators.required),
      'description' : new FormControl(null)

    });
    
  }
  onSaveJourney(){
      console.log(this.projectForm.value);
  }
 

}
