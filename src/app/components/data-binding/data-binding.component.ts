import { Component,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone:true,

  //Agar two way data binding use karn ahia toh frmsmodule import karna hoga 
  //Angular 17 k pehle hum ye sab app.module.ts mein karte the
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
 // Data types --> string, date, number, boolean
  course : string = "Angular"; //Syntax : varName : datatype = 'value'

  name ='Yashvi'; //yaha humne directly initialize krdi value

  rollNo : number = 48; // agar type define kar diya say number then vo string ya boolean ya other dataype accept hi nahi karta

  currentDate : Date = new Date();

  inputType = 'checkbox';

  inputType1 = 'radio';

  stateName = '';
  

  //aab class hai yani by default constructor call ho hi jata hai
  constructor(){

  }
  message : string = ''
  showMessage(){
    this.message = 'Button Clicked! Event binding testing done';
  }

  
}
 