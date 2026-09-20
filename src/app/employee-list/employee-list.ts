import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee-service';
@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
  // providers:[EmployeeService]
})
export class EmployeeList {
  public Employee:any;
  constructor(private emp:EmployeeService){
        this.Employee=emp.getEmployee();
  }
}
