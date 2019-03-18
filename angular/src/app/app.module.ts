import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
<<<<<<< HEAD
import { SignInComponent } from './sign-in/sign-in.component';
=======
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about', component: AboutComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'signIn', component: SignInComponent},
  {path: '**', component: NotFoundComponent},
]
>>>>>>> 31f10b4e2d190a34eb3b9e0c012320622a5c357d

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SignUpComponent,
    AboutComponent,
    NotFoundComponent,
<<<<<<< HEAD
=======
    HeaderComponent,
    FooterComponent,
>>>>>>> 31f10b4e2d190a34eb3b9e0c012320622a5c357d
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
