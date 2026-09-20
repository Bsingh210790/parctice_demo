import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-ng-class-dir',
  imports: [NgClass],
  templateUrl: './ng-class-dir.html',
  styleUrl: './ng-class-dir.css',
})
export class NgClassDir {
  public condition=false;
  public cssClass="myColour myWriting";
  public cssArray=["myColour","myWriting"]
  public myclass=new MyClass();
}
class MyClass {
  myColour: boolean = true;
  myWriting: boolean = false;
}