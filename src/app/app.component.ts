import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { SignalComponent } from "./components/signal/signal.component";
import { PipeComponent } from './components/pipe/pipe.component';
import { StructuralDirectiveComponent } from './Directive/structural-directive/structural-directive.component';

@Component({
  selector: 'app-root',
  imports: [DataBindingComponent, SignalComponent, PipeComponent, StructuralDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'routingg';
}
