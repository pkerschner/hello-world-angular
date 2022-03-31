import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuName: string = "Angular Menu";

  constructor() { }

  ngOnInit(): void {
  }

}
