import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainHomeComponent } from './main-home/main-home.component';

import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { HomeDisplayComponent } from './home-display/home-display.component';

@NgModule({
  declarations: [MainHomeComponent, HomeDisplayComponent],
  imports: [CommonModule, HomeRoutingModule, RouterModule, LayoutModule],
})
export class HomeModule {}
