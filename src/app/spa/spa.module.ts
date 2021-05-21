import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaRoutingModule } from './spa-routing.module';
import { MainSpaComponent } from './main-spa/main-spa.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [MainSpaComponent],
  imports: [CommonModule, SpaRoutingModule, LayoutModule],
})
export class SpaModule {}
