import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementComponent } from './management/management.component';
import { HomeComponent } from './home/home.component';
import { PartyserviceComponent } from './partyservice/partyservice.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "management", component: ManagementComponent},
  {path: "partyservice", component: PartyserviceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
