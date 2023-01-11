import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card-name',
  templateUrl: './big-card-name.component.html',
  styleUrls: ['./big-card-name.component.css']
})
export class BigCardNameComponent implements OnInit {

  @Input()
  gameName:string = ""


  constructor() { }

  ngOnInit(): void {
  }

}
