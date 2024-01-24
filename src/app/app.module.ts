import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import{MatButtonModule} from '@angular/material/button';
import{MatToolbarModule} from '@angular/material/toolbar';
import{ MatExpansionModule} from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AdityaComponent } from './aditya/aditya.component';
import { C1Component } from './c1/c1.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { PannelComponent } from './pannel/pannel.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { GithubProfileComponentComponent } from './github-profile-component/github-profile-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';


@NgModule({
  declarations: [
    AppComponent,
    AdityaComponent,
    C1Component,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
    PannelComponent,
    NavbarComponentComponent,
    HomecomponentComponent,
    GithubProfileComponentComponent,
    NotFoundComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
