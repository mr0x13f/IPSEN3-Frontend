import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  passwordForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<ChangePasswordComponent>,
    public authService: AuthService,
    public userService: UserService,
    public http: HttpService) { }

  ngOnInit() {
    this.onCreateNameForm();
    
  }

  onCreateNameForm(){
    
    this.passwordForm = new FormGroup({
      'oldPassword' : new FormControl(null, [Validators.required, Validators.nullValidator]),
      'firstNewPassword' : new FormControl(null, [Validators.required, Validators.nullValidator]),
      'secondNewPassword' : new FormControl(null, [Validators.required, Validators.nullValidator])
        
    });
  
  }

  
  onUpdatePassword(){
    
  }

  closeChangePasswordPopup(){
    this.dialogRef.close();
  }
}
