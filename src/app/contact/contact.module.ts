import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { MainContactComponent } from './main-contact/main-contact.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [MainContactComponent],
  imports: [CommonModule, ContactRoutingModule, LayoutModule],
})
export class ContactModule {}
