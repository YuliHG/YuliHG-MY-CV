import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { InterestsComponent } from './interests/interests.component';
import { LanguagesComponent } from './languages/languages.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducationComponent,
    SkillsComponent,
    CertificatesComponent,
    InterestsComponent,
    LanguagesComponent,
    WorkExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
