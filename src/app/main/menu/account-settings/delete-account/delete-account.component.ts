import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {
  currentUser = this.authService.user;

  constructor(public dialogRef: MatDialogRef<DeleteAccountComponent>,
    public authService: AuthService,
    public router: Router,
    public userService: UserService) { }

  ngOnInit() {
    
  }

  closeDeleteAccountPopup(){
    this.dialogRef.close();
  }

  onDeleteAccount(){
    this.userService.delete(() => {
      this.onNavigateToInlog()
      console.log("Het werkt")
    }, error => {
      console.log("HEEE het werkt niet")
    })

  }

  onNavigateToInlog(){
    this.closeDeleteAccountPopup();
    this.authService.clearAuth();
    this.router.navigate(['/auth'])
    
  }

  

  

}
