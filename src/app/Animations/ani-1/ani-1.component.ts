import { Component } from '@angular/core';
// import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-ani-1',
  imports: [],
  templateUrl: './ani-1.component.html',
  styleUrl: './ani-1.component.scss',
  // animations: [
  //   trigger('fadeAnimation', [
  //     state('visible', style({ opacity: 1 })),
  //     state('hidden', style({ opacity: 0 })),
  //     transition('visible <=> hidden', animate('500ms ease-in-out'))
  //   ])
  // ]
})
export class Ani1Component {
  isVisible = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
