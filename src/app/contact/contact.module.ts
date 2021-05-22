import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { MainContactComponent } from './main-contact/main-contact.component';
import { LayoutModule } from '../layout/layout.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainContactComponent, FormComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
  ],
})
export class ContactModule {}
