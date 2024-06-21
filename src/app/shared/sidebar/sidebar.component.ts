import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router) {}

  ngOnInit(): void {}

  faHouse = faHouse;
  faBriefcase = faBriefcase;
  faCalendar = faCalendar;
  faArrowRightFromBracket = faArrowRightFromBracket;

  dashboard: boolean = true;
  data: boolean = false;
  firstSteps: boolean = false;

  dashboardNav(event: Event) {
    if (this.data == true || this.firstSteps == true) {
      this.data = false;
      this.firstSteps = false;
      this.dashboard = true;
    }
  }
  dataNav(event: Event) {
    if (this.dashboard == true || this.firstSteps == true) {
      this.dashboard = false;
      this.firstSteps = false;
      this.data = true;
    }
  }
  stepsNav(event: Event) {
    if (this.data == true || this.dashboard == true) {
      this.data = false;
      this.dashboard = false;
      this.firstSteps = true;
    }
  }
}
