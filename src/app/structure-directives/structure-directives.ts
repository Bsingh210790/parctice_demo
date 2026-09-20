import { Component } from '@angular/core';
//import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-structure-directives',
  //imports: [NgIf, NgSwitch, NgSwitchCase],
  templateUrl: './structure-directives.html',
  styleUrl: './structure-directives.css',
})
export class StructureDirectives {
  public display=false;
  public pizza="a";
  public furtes=["banana","mango","apple"];
  public person=[{name:"kumar",age:20, hobies:["singing","dansing"]},
    {name:"Arun",age:28,hobies:["Watching Moves","dansing"]},
    {name:"barun",age:33,hobies:["singing","Lisning"]}


  ]
}
