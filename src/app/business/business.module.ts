import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { MainBusinessComponent } from './main-business/main-business.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [MainBusinessComponent],
  imports: [CommonModule, BusinessRoutingModule, LayoutModule],
})
export class BusinessModule {}
