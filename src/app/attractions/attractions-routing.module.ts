import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttractionDisplayComponent } from './attraction-display/attraction-display.component';
import { MainAttractionsComponent } from './main-attractions/main-attractions.component';

const routes: Routes = [
  { path: '', component: MainAttractionsComponent },
  { path: ':id/:attraction', component: AttractionDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttractionsRoutingModule {}
