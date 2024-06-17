import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [HeaderComponent, SidebarComponent],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faBell);
  }
}
