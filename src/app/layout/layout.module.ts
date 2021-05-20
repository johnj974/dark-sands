import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { RouterModule } from '@angular/router';
import { NavBannerComponent } from './nav-banner/nav-banner.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    NavBannerComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    NavBannerComponent,
  ],
})
export class LayoutModule {}
