import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { SignalComponent } from "./components/signal/signal.component";
import { PipeComponent } from './components/pipe/pipe.component';
import { StructuralDirectiveComponent } from './Directive/structural-directive/structural-directive.component';
import { GetApiComponent } from './api-integration/get-api/get-api.component';
import { PostApiComponent } from './api-integration/get-api/post-api/post-api.component';
import {  TestComponent } from "./components/test/test.component";

@Component({
  selector: 'app-root',
  imports: [DataBindingComponent, SignalComponent, PipeComponent, StructuralDirectiveComponent, GetApiComponent, PostApiComponent,  TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'routingg';
}
