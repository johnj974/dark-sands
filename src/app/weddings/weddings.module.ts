import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeddingsRoutingModule } from './weddings-routing.module';
import { MainWeddingComponent } from './main-wedding/main-wedding.component';


@NgModule({
  declarations: [
    MainWeddingComponent
  ],
  imports: [
    CommonModule,
    WeddingsRoutingModule
  ]
})
export class WeddingsModule { }
