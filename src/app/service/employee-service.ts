import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  // public Employee=[
  //   {name:"barun",age:30},
  //   {name:"Arun",age:32}

  // ]
  getEmployee(){
    return [
    {name:"barun",age:30},
    {name:"Arun",age:32}

  ]
  }
}
