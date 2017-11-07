import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
