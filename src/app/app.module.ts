import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AdityaComponent } from './aditya/aditya.component';
import { C1Component } from './c1/c1.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//this line 

@NgModule({
  declarations: [
    AppComponent,
    AdityaComponent,
    C1Component,
    PostCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
