import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeddingsRoutingModule } from './weddings-routing.module';
import { MainWeddingComponent } from './main-wedding/main-wedding.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [MainWeddingComponent],
  imports: [CommonModule, WeddingsRoutingModule, LayoutModule],
})
export class WeddingsModule {}
