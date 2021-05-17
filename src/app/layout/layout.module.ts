import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, BannerComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, FooterComponent, BannerComponent],
})
export class LayoutModule {}
