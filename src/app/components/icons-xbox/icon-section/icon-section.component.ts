import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-section',
  templateUrl: './icon-section.component.html',
  styleUrls: ['./icon-section.component.css']
})
export class IconSectionComponent implements OnInit {

  @Input()
  itemName:string = ""

  @Input()
  imageIcon:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
