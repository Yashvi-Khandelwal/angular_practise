import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { RoutePractiseComponent } from './app/components/route-practise/route-practise.component';

bootstrapApplication( AppComponent,appConfig)
  .catch((err) => console.error(err));
