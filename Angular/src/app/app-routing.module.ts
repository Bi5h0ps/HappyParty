import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementComponent } from './management/management.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "management", component: ManagementComponent},
  {path: "service", component: ServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
