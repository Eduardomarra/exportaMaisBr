import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() dataComponent: string = '';
}
