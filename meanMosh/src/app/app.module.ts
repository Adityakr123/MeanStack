import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgContentModifiedComponent } from './ng-content-modified/ng-content-modified.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NgContentComponent,
    NgContentModifiedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
