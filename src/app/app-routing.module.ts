import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { BikesDetailsComponent } from './bikes-details/bikes-details.component';


const routes: Routes = [
  {path: '', component: BikesListComponent},
  {path: 'bikes', redirectTo: '', pathMatch:'full'},
  {path: 'details', component: BikesDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
