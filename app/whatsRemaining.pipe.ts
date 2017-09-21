import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "whatsRemaining",
  pure: false
})

export class RemaingPintsPipe implements PipeTransform {

  transform(input: Keg[], desiredFilter){
    var output: Keg[] = [];
    if (desiredFilter === "fullKegs"){
      for (var i = 0; i < input.length; i++) {
            if (input[i].remainingPints > 100) {
              output.push(input[i]);
            }
          }
          return output;
    } else if (desiredFilter === "almostEmptyKegs"){
      for (var i = 0; i < input.length; i++) {
            if (input[i].remainingPints < 20) {
              output.push(input[i]);
            }
          }
          return output;
    } else {
      return input;
    }

    }

}
