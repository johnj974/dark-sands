import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttractionsRoutingModule } from './attractions-routing.module';
import { MainAttractionsComponent } from './main-attractions/main-attractions.component';
import { LayoutModule } from '../layout/layout.module';
import { AttractionInfoComponent } from './attraction-info/attraction-info.component';

@NgModule({
  declarations: [MainAttractionsComponent, AttractionInfoComponent],
  imports: [CommonModule, AttractionsRoutingModule, LayoutModule],
})
export class AttractionsModule {}
