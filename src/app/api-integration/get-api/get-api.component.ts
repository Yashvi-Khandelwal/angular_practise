import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.scss'
})
export class GetApiComponent {

  userList: any = [];

  //object banane ke liye dependency injectable
  constructor(private http: HttpClient) { 
    // this.getAllUser();   //page load pe karna ho to yaha pe call karna padega
  }

  getAllUser(){
    debugger

    //data aa raha yani api hit ho gayi aab usko aap kisi mein store kar sakte ho islai aapko service banani padegi aur subscribe ke andar store karna padega

    //jo data aa raha vo aab hume userlist variable mein hold karna haii
    //jo data apko catch karna hai vo likhna hoga subscribe ke andar uske bahar nahi chalega kuch bhi 
    //API call hone k baad apko kuch mil raha aur vo apko catch karna hai toh subscribe use hota hai
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      debugger;
      this.userList = res;
    }, error => {
      console.log('Error', error);
    })
  }


  // Another way
  //  http = inject(HttpClient);
}
