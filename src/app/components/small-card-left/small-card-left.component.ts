import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card-left',
  templateUrl: './small-card-left.component.html',
  styleUrls: ['./small-card-left.component.css']
})
export class SmallCardLeftComponent implements OnInit {

  @Input()
  cardLeftTitle:string = ""

  @Input()
  cardLeftDescription:string = ""

  @Input()
  cardLeftImage:string = ""


  constructor() { }

  ngOnInit(): void {
  }

}
