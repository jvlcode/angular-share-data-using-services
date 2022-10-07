import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../_services/customer.service';

@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report.component.html',
  styleUrls: ['./customer-report.component.css']
})
export class CustomerReportComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

  customers:Customer[]=[];

  ngOnInit(): void {
      this.customers = this.customerService.get();
      console.log('CustomerReportData',this.customers===this.customerService.get());
      
  }

}
