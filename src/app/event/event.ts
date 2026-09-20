import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {
  public name=""
  HelloMessage(){
     console.log("hello Barun") ;
    //this.name="hello Barun";
    //alert(a)
  }
}
