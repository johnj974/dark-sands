import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAttractionsComponent } from './main-attractions/main-attractions.component';

const routes: Routes = [{ path: '', component: MainAttractionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttractionsRoutingModule {}
