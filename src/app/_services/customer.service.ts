import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  customers:Customer[]=[];

  add(customer_name:string){
    const customer = new Customer();
    customer.name = customer_name;
    this.customers.push(customer)
  }

  get(){
      return this.customers;
  }

}
