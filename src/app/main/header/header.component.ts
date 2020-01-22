import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  sidenavLeft:String = '-100'; 
  opacityBackground:String = 'none';
  backgroundType:String = 'transparent';

  constructor() { 
  }

  ngOnInit() {
  }

  toggleMenu() {
    if(this.sidenavLeft == '0') {
      this.sidenavLeft = '-100';
      this.opacityBackground = 'none';
      this.backgroundType = 'transparent';
      return;
    }
    this.sidenavLeft = '0';
    this.opacityBackground = 'all';
    this.backgroundType = '#20202080';
  }

  getLeft() {
    return this.sidenavLeft;
  }

  getOpacity() {
    return this.opacityBackground;
  }

  getType() {
    return this.backgroundType;
  }

}
