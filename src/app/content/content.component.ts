import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  currentPage: number = 2; // 1: addjourney  2: livetracker  3: overview
  showAllPages: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
