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

  dashboard: boolean = false;
  data: boolean = false;
  firstSteps: boolean = false;
}
