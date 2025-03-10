import { AsyncPipe, CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { PracPipePipe } from '../../pipe/prac-pipe.pipe';

@Component({
  selector: 'app-pipe',
  imports: [PracPipePipe,AsyncPipe,UpperCasePipe,LowerCasePipe, TitleCasePipe, DatePipe, CurrencyPipe, JsonPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss'
})
export class PipeComponent {

  currentDate : Date = new Date();

  amount = 123.45;
  company = 'acme corporation';
  purchasedOn = '2024-07-08';

  Occupation = '';

  me:any ={
    name:"Yashvi Khandelwal",
    city:'Dahod',
    enrollment:48,
    state:''
  }

  // currentTime : Observable<Date> = new Observable<Date>;
  // constructor(){
  //   this.currentTime = interval(1000).pipe(Map(() => new Date()));
  // }
}
