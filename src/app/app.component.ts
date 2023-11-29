import { Component } from '@angular/core';

import OrdersJson from './orders.json';


//https://stackblitz.com/edit/angular-e1f9hq?file=app%2Fapp.component.html
//Exemplo de como fazer a paginacao

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