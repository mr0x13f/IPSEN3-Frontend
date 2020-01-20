import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  sidenavLeft:String = '-50'; 

  constructor() { 
  }

  ngOnInit() {
  }

  toggleMenu() {
    if(this.sidenavLeft == '0') {
      this.sidenavLeft = '-50';
      return;
    }
    this.sidenavLeft = '0';
  }

  getLeft() {
    return this.sidenavLeft;
  }

}
