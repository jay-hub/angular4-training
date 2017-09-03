import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CompanyListComponent } from './company-list.component'
import { CompanyDetailComponent } from './company-detail.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CompanyListComponent,  CompanyDetailComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
