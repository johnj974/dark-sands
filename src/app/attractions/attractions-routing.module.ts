import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttractionChosenComponent } from './attraction-chosen/attraction-chosen.component';
import { AttractionDisplayComponent } from './attraction-display/attraction-display.component';
import { MainAttractionsComponent } from './main-attractions/main-attractions.component';

const routes: Routes = [
  { path: '', component: MainAttractionsComponent },
  { path: ':id/:attraction', component: AttractionDisplayComponent },
  {
    path: ':id/:attraction/:id/:activity',
    component: AttractionChosenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttractionsRoutingModule {}
