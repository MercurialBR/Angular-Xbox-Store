import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons-xbox',
  templateUrl: './icons-xbox.component.html',
  styleUrls: ['./icons-xbox.component.css']
})
export class IconsXboxComponent implements OnInit {

  @Input()
  itemName:string = ""

  @Input()
  imageIcon:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
