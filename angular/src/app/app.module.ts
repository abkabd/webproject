import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignstudentComponent } from './components/signstudent/signstudent.component';
import { SigncompanyComponent } from './components/signcompany/signcompany.component';
import { InternshipComponent } from './components/internship/internship.component';
import { InternshipListComponent } from './components/internship-list/internship-list.component';
import { InternshipDivComponent } from './components/internship-div/internship-div.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about', component: AboutComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'signUpStudent', component: SignstudentComponent},
  {path: 'signUpCompany', component: SigncompanyComponent},
  {path: 'internship-element', component: InternshipComponent},
  {path: 'internships', component: InternshipListComponent},
  {path: '**', component: NotFoundComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SignUpComponent,
    AboutComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignstudentComponent,
    SigncompanyComponent,
    InternshipComponent,
    InternshipListComponent,
    InternshipDivComponent
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
