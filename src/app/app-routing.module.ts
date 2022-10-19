import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceListComponent } from './service-list/service-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'service-details', pathMatch: 'full' },
  { path: 'service-details', component: ServiceListComponent },
  { path: 'service-details/:id', component: ServiceDetailComponent },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  //   data: { title: '404' },
  // },
];

// const routes: Routes = [
//   { path: 'first-component', component: FirstComponent },
//   { path: 'second-component', component: SecondComponent },
// ];

// const routes: Routes = [
//   { path: 'first-component', component: FirstComponent },
//   { path: 'second-component', component: SecondComponent },
//   { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
