import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-percents',
  templateUrl: './percents.component.html',
  styleUrls: ['./percents.component.scss'],
})
export class PercentsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() dataComp: string = '';
}
