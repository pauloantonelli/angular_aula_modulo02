import { Component, OnInit } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-mat-slide-toggle',
  templateUrl: 'slide-toggle-overview-example.html',
  styleUrls: ['slide-toggle-overview-example.css'],
})
export class SlideComponent implements OnInit {
  color = 'accent';
  checked = false;
  disabled = false;
  constructor() { }

  ngOnInit() {
  }

}
