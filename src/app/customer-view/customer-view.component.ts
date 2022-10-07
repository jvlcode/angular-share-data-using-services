import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../_services/customer.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  constructor(private customerService:CustomerService) { }
  
  customers : Customer[]=[];
  ngOnInit(): void {
    this.customers = this.customerService.get();
    console.log('CustomersData',this.customers===this.customerService.get());
    
  }




}
