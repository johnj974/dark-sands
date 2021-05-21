import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainHomeComponent } from './main-home/main-home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { DiningComponent } from './dining/dining.component';
import { SpaComponent } from './spa/spa.component';
import { WeddingComponent } from './wedding/wedding.component';
import { BusinessComponent } from './business/business.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    MainHomeComponent,
    RoomsComponent,
    AttractionsComponent,
    DiningComponent,
    SpaComponent,
    WeddingComponent,
    BusinessComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, RouterModule, LayoutModule],
})
export class HomeModule {}
