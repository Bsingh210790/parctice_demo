import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule  } from '@angular/common';
import { User } from "./user/user";
import { User1 } from "./user1/user1";
import { User2 } from "./user2/user2";
import { User3 } from "./user3/user3";
import { Interpolation } from "./interpolation/interpolation";
import { Event } from "./event/event";
import { Bind } from "./bind/bind";
import { ClassBinding } from "./class-binding/class-binding";
import { NgClassDir } from "./ng-class-dir/ng-class-dir";
import { TempletRefrance } from "./templet-refrance/templet-refrance";
import { TwoWay } from "./two-way/two-way";
import { StructureDirectives } from './structure-directives/structure-directives';
import { Parents } from './parents/parents';
import { Child } from './child/child';
import { CustomPipePipe } from './pipe/custom-pipe-pipe';
import { EmployeeList } from './employee-list/employee-list';
import { EmployeeDetails } from './employee-details/employee-details';
import { EmployeeService } from './service/employee-service';
import { HttpClientModule } from '@angular/common/http';
import { Post } from './service/post';
import { response } from 'express';
@Component({
  selector: 'app-root',
  providers:[EmployeeService,Post],
   imports: [
    RouterOutlet,EmployeeList,EmployeeDetails,HttpClientModule,
    User,
    User1,
    User2,
    User3,
    Interpolation,
    Event,
    Bind,
    ClassBinding,
    NgClassDir,
    TempletRefrance,TwoWay,StructureDirectives,Parents,Child,CommonModule,CustomPipePipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-studyapp');
  Head="Barun";
  pipe="this is Pipie"
  msg="";
  _post:any
  helloMessage(){
    return "My name barun";
  }
constructor(private post: Post){}
ngOnInit(){
  this.post.getpost().subscribe(response=>{
this._post=response;
  })
}  
}
