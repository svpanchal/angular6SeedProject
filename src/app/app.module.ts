import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { environment } from '../environments/environment.prod';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoggerModule.forRoot({
      level: environment.logLevel,
      disableConsoleLogging: false
      // serverLoggingUrl: '/api/logs', // optional field lets us define the full path to your api end point for logging to server
      // serverLogLevel: NgxLoggerLevel.ERROR // defines the minimum log level for server-side logging
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
