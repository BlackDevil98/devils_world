import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { DevilsComponent } from './devils/devils.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'nav', component: NavComponent },
  { path: 'devils', component: DevilsComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'about', component: AboutComponent },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: CreateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
