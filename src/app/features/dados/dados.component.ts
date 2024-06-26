import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewContainerRef,
  AfterViewInit,
  Type,
  ComponentRef,
  Renderer2,
} from '@angular/core';

import { CountriesComponent } from './components/countries/countries.component';
import { ProductsComponent } from './components/products/products.component';
import { PercentsComponent } from './components/percents/percents.component';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss'],
})
export class DadosComponent implements OnInit, AfterViewInit {
  @ViewChild('dataComponent', { read: ViewContainerRef })
  dataComponent!: ViewContainerRef;

  @ViewChild('dataComponent') dataComponentEliminate!: ElementRef;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {}

  removeDiv() {
    const dataComponentElement = this.dataComponentEliminate.nativeElement;
    if (dataComponentElement && dataComponentElement.parentNode) {
      dataComponentElement.parentNode.removeChild(dataComponentElement);
    }
  }

  getDados<T extends object>(component: Type<T>, data: string) {
    this.removeDiv();
    this.dataComponent.clear();
    const componentRef: ComponentRef<T> =
      this.dataComponent.createComponent(component);
    if ('data' in componentRef.instance) {
      (componentRef.instance as any).data = data;
    }
  }

  loadCountry() {
    this.getDados(CountriesComponent, 'Country');
  }

  loadProduct() {
    this.getDados(ProductsComponent, 'Product');
  }

  loadPercent() {
    this.getDados(PercentsComponent, 'Percent');
  }
}
