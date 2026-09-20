import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  imports: [],
  templateUrl: './class-binding.html',
  styleUrl: './class-binding.css',
})
export class ClassBinding {
  public mycssClass="myColour myWriting";
  public condition=false;
  myCall(){
    if(this.condition==true){
       return "myColour";
    }
    else{
      return "myWriting";
    }
    
  }
}
