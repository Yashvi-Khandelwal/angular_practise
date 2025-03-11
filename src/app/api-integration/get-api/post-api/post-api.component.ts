import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-api',
  imports: [],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.scss'
})
export class PostApiComponent {

  http = inject(HttpClient);

  //Whatever object I need to send I have to create it
  deptObj: any = {
    "departmentId": 1,
    "departmentName": "",
    "departmentLogo": ""
  }

  onSave() {

//jab post api jati hai toh url k sath object bhi jata hai k aesa response aayega

//whenever we call API subscribe is mandatory

    this.http.post('https://jsonplaceholder.typicode.com/posts', this.deptObj).subscribe((res: any) => {
      debugger;
      console.log('Response', res);
    }, error => {
      console.log('Error', error);
    })
  }

}
