import { Component } from '@angular/core';

import OrdersJson from './orders.json';


interface ORDERS {

  "id": Number;
  "customer": String;
  "address1": String;
  "city": String;
  "date": String;

  }



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 
  title = `aa`;


  Orders: ORDERS[] = OrdersJson;
 
  constructor(){
    console.log(this.Orders);
  }
  
}