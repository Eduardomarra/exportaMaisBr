import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { StopPropagationDirective } from './directive/stop-propagation.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, StopPropagationDirective],
  imports: [CommonModule, FontAwesomeModule, RouterModule, HttpClientModule],
  exports: [HeaderComponent, SidebarComponent],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faBell);
  }
}
