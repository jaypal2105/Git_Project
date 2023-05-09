import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { ContactComponent } from './routing/contact/contact.component';
import { ErrorComponent } from './routing/error/error.component';
import { DeptComponent } from './routing/dept/dept.component';
import { ParentComponent } from './@input/parent/parent.component';
import { Parent1Component } from './@output/parent1/parent1.component';
import { P1Component } from './@output/p1/p1.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"dept/:id/:name", component:DeptComponent},

  {path:"parent", component:ParentComponent},               //@Input
  {path:"parent1", component:Parent1Component},               //@Output
  {path:"p1", component:P1Component},               //@Output
  
  // {path:"**", component:ErrorComponent},      // wrong url break the execution that time we need to use wild card this is wild card we have used
  // {path:"", redirectTo:""},   // it will redirect to home as it home has link of blank string
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
