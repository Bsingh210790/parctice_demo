import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css',
})
export class Interpolation {
  public name="barun Kuamr Singh";
  public Age=25;

  helloMessage(){
    return "Hello message";
  }
}
