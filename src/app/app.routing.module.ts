import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ContactComponent } from './pages/contact/contact.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch: 'full'},
  {path: 'contact', component: ContactComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
