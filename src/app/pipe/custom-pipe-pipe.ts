import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
})
export class CustomPipePipe implements PipeTransform {
  transform(value: number, ...args: number[]): unknown {
    // return value  +" Barun";
    const[a,b]=args
    return value+a+b;
  }
}
