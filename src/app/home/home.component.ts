import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // small-card
  @Input()
  gameTitle:string = " "

  @Input()
  gameDescription:string = " "

  @Input()
  gameImage:string = " "

  // small-card-left

  @Input()
  cardLeftTitle:string = ""

  @Input()
  cardLeftDescription:string = ""

  @Input()
  cardLeftImage:string = ""

  // big-card

  @Input()
  bigCardImg:string = " "

  @Input()
  bigCardTitle:string = " "


  constructor() { }

  ngOnInit(): void {
  }

}
