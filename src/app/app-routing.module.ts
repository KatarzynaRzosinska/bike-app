import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { BikesDetailsComponent } from './bikes-details/bikes-details.component';
import { BikesResolverService } from './bikes-details/bikes-resolver.service';

const routes: Routes = [
  { path: '', component: BikesListComponent },
  { path: 'bikes', redirectTo: '', pathMatch: 'full' },
  {
    path: 'station/:id',
    component: BikesDetailsComponent,
    resolve: [BikesResolverService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
