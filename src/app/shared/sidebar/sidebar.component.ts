import { Component, OnInit } from '@angular/core';
import {
  faHouse,
  faBriefcase,
  faCalendar,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  faHouse = faHouse;
  faBriefcase = faBriefcase;
  faCalendar = faCalendar;
  faArrowRightFromBracket = faArrowRightFromBracket;

  dashboard: boolean = true;
  data: boolean = false;
  firstSteps: boolean = false;

  dashboardNav() {
    if (this.data == true || this.firstSteps == true) {
      this.data = false;
      this.firstSteps = false;
    }
    this.dashboard = true;
  }
  dataNav() {
    if (this.dashboard == true || this.firstSteps == true) {
      this.dashboard = false;
      this.firstSteps = false;
    }
    this.data = true;
  }
  stepsNav() {
    if (this.data == true || this.dashboard == true) {
      this.data = false;
      this.dashboard = false;
    }
    this.firstSteps = true;
  }
}
