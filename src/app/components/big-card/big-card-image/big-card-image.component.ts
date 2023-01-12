import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card-image',
  templateUrl: './big-card-image.component.html',
  styleUrls: ['./big-card-image.component.css']
})
export class BigCardImageComponent implements OnInit {

  @Input()
  bigCardImg:string = " "

  @Input()
  bigCardTitle:string = " "

  constructor() { }

  ngOnInit(): void {
  }

}
