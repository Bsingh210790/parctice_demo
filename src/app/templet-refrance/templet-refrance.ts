import { Component } from '@angular/core';

@Component({
  selector: 'app-templet-refrance',
  imports: [],
  templateUrl: './templet-refrance.html',
  styleUrl: './templet-refrance.css',
})
export class TempletRefrance {
  public displayName='';
  getName(name:string){
 //console.log(name);
this.displayName=name
  }
}
