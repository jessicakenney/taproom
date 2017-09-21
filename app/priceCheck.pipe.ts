import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "pricey",
  pure: false
})

export class PricePipe implements PipeTransform {
  transform(input: Keg[], desiredFilter) {
    var output: Keg[] = [];

    if (desiredFilter === "lowPrice"){
      for (var i=0; i<input.length; i++) {
        if(input[i].pintPrice < 5){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFilter === "highPrice"){
      for (var i=0; i<input.length; i++) {
        if(input[i].pintPrice >= 5){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
