import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { MatrixNg6LibraryModule } from 'matrix-ng6-library';
import { environment } from '../environments/environment.prod';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatrixNg6LibraryModule,
    LoggerModule.forRoot({
      level: environment.logLevel,
      disableConsoleLogging: false
      // serverLoggingUrl: '/api/logs', // optional field lets us define the full path to your api end point for logging to server
      // serverLogLevel: NgxLoggerLevel.ERROR // defines the minimum log level for server-side logging
    })
  ],
  exports: [
    MatrixNg6LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
