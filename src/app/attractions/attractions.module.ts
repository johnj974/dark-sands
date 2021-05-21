import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttractionsRoutingModule } from './attractions-routing.module';
import { MainAttractionsComponent } from './main-attractions/main-attractions.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [MainAttractionsComponent],
  imports: [CommonModule, AttractionsRoutingModule, LayoutModule],
})
export class AttractionsModule {}
