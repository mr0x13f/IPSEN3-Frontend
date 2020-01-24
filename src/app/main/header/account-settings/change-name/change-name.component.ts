import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HttpService } from 'src/app/services/http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.component.html',
  styleUrls: ['./change-name.component.css']
})
export class ChangeNameComponent implements OnInit {
  nameForm: FormGroup;
  username: string;
  currentUser = this.authService.user;
  

  constructor(public dialogRef: MatDialogRef<ChangeNameComponent>,
    private http: HttpService,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.onCreateNameForm();
    
  }

  onCreateNameForm(){
    
    this.nameForm = new FormGroup({
      'username' : new FormControl(null, [Validators.required, Validators.nullValidator])      
    });
  
  }

  onChangeName(nameData: {username: string}){

    this.http.post("user/changename", {name:nameData.username})
    .subscribe(() => {
      this.currentUser.name = nameData.username;
      this.dialogRef.close();      
    }, error => {   
      
    })

  }

  closeChangeNamePopup(){
    this.dialogRef.close();
    
  }

}
