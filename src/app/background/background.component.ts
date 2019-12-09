import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  @ViewChild('glCanvas', {static: true}) glCanvas: ElementRef;
  
  constructor() { }

  ngOnInit() {

    var img = new Image();
    img.onload = () => {
      this.draw(img);
    }
    img.src = "https://media1.tenor.com/images/787095921586c051236d8a16f0472ae2/tenor.gif?itemid=7479835";

    window.addEventListener('resize', () => {
      this.draw(img);
    }, false);

  }

  draw(img:HTMLImageElement) {
    let canvas = <HTMLCanvasElement> this.glCanvas.nativeElement;
    let ctx = canvas.getContext("2d");
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
  }

}
