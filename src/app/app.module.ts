import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';

import { DataService } from "./services/data.service";
import { LoggerService } from "./services/logger.service";

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMoemoryDataService } from "./services/in-memory-data.service";
import { SharedModule } from "./shared/shared.module";
import { HomeComponent } from "./home.component";
import { PathNotFoundComponent } from "./path-not-found.component";
import { AppRoutes } from "./app.routes";
import { CompanyModule } from "./company/company.module";

@NgModule({
  imports: [SharedModule, BrowserModule, InMemoryWebApiModule.forRoot(InMoemoryDataService), CompanyModule,
            RouterModule.forRoot(AppRoutes)],
  declarations: [AppComponent, HomeComponent, PathNotFoundComponent],
  bootstrap: [AppComponent],
  providers: [DataService, LoggerService]
})
export class AppModule { }
