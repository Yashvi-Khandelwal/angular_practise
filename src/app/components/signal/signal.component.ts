import { ChangeDetectionStrategy, Component ,signal} from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
firstName:string='Yashvi'

  //creating signals
//Whenever any signal value gets changed UI will get to know about it and will update it irrespective of change detection is set to true or false

  fullName = signal('Yashvi Khandelwal'); // signal_name = signal('default value')
  day = signal<string>('Monday');  // with datatype : creating signal

  constructor(){
    const value = this.day();
    setTimeout(() => {
      this.firstName = 'Krishna';
      // this.fullName.set('Sarita khandelwal')
      // this.day.set('Tuesday');
    },5000);
  }
}
