import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  @ViewChild('glCanvas', {static: true}) glCanvas: ElementRef;
  @Input() contentLeftPos: number;
  
  constructor() { }

  ngOnInit() {
  }
}
