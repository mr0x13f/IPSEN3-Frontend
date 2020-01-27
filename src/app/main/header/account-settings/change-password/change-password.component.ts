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
  newPasswordBool: boolean = true;
  oldPasswordBool: boolean = true;

  constructor(public dialogRef: MatDialogRef<ChangePasswordComponent>,
    public authService: AuthService,
    public userService: UserService,
    public http: HttpService) { }

  ngOnInit() {
    this.onCreateNameForm();
  }

  onCreateNameForm(){
    
    this.passwordForm = new FormGroup({
      'oldPassword' : new FormControl(null, [Validators.required]),
      'firstNewPassword' : new FormControl(null, [Validators.required]),
      'secondNewPassword' : new FormControl(null, [Validators.required])
        
    });
  }

  onUpdatePassword(){
  const oldPassword = this.passwordForm.value.oldPassword;
  const firstNewPassword = this.passwordForm.value.firstNewPassword;
  const secondNewPassword = this.passwordForm.value.secondNewPassword;

  
    if(firstNewPassword == secondNewPassword){
      //Update password
      this.userService.update;
      this.newPasswordBool =true;
      this.authService.changePassword(oldPassword, firstNewPassword,
        () => {
          console.log("GOED")
          this.dialogRef.close();
        },() => {
          //fout
          console.log("FOUT")
          this.oldPasswordBool =false;
          
      
        });
      
    }else{
      this.newPasswordBool= false;
      this.oldPasswordBool= true;
      
    }
  }
  
  

  closeChangePasswordPopup(){
    this.dialogRef.close();
  }
}
