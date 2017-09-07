import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list.component';
import { CompanyDetailComponent } from './company-detail.component';
import { AddressComponent } from './address.component';
import { DataService } from "./services/data.service";
import { LoggerService } from "./services/logger.service";

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMoemoryDataService } from "./services/in-memory-data.service";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, InMemoryWebApiModule.forRoot(InMoemoryDataService)],
  declarations: [AppComponent, CompanyListComponent, CompanyDetailComponent, AddressComponent],
  bootstrap: [AppComponent],
  providers: [DataService, LoggerService]
})
export class AppModule { }
