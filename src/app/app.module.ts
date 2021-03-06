import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { DevilsComponent } from './devils/devils.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { FootersComponent } from './footers/footers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    CreateComponent,
    DevilsComponent,
    ProjectComponent,
    AboutComponent,
    FootersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
