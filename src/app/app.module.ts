import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthGuard } from '../app/pages/auth.guard';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
