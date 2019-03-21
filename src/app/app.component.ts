import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'Matrix Angular6 Seed Project';
  public env = environment;

  constructor(private logger: NGXLogger) {
    this.logger.warn('log message');
  }

  ngOnInit() {
  }
}
