import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  // @Input() myData :string='';
@Output() public childEvent=new EventEmitter();

fireEvent(){
  this.childEvent.emit("barun")
}
}
