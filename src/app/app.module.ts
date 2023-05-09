import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './@input/child/child.component';
import { ParentComponent } from './@input/parent/parent.component';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { ContactComponent } from './routing/contact/contact.component';
import { ErrorComponent } from './routing/error/error.component';
import { DeptComponent } from './routing/dept/dept.component';
import { Child1Component } from './@output/child1/child1.component';
import { Parent1Component } from './@output/parent1/parent1.component';
import { P1Component } from './@output/p1/p1.component';
import { C1Component } from './@output/c1/c1.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    DeptComponent,
    Child1Component,
    Parent1Component,
    P1Component,
    C1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
