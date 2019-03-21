import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private logger: NGXLogger) {
    this.logger.error('Error message');
  }

  public title: string = 'Matrix Angular6 Seed Project';
  public env = environment;
}
