import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
