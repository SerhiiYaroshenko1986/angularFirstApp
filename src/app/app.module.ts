import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvMainComponent } from './cv-main/cv-main.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { GitCallComponent } from './git-call/git-call.component';

@NgModule({
  declarations: [
    AppComponent,
    CvMainComponent,
    CategoryDetailsComponent,
    ContactFormComponent,
    GitCallComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
