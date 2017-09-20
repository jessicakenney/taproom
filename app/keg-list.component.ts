import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <ul>
    <div *ngFor = "let keg of childKegList" class="well">
      <h3> {{keg.name}} </h3>
      <h4> {{keg.brand}}</h4>
      <h5> Pint Price <em>(16oz)</em> : $ {{keg.pintPrice}}</h5>
      <h5 [class]="ABVColor(keg)"> <em> ABV: {{keg.ABV}}% </em></h5>
      <button (click)="pourPint(keg)">Pour</button>
      <button (click)="editKegClicked(keg)">Edit</button>
   </div>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  ABVColor(keg){
    if (keg.ABV <= 5 ){
      return "light";
    } else if(keg.ABV > 5 && keg.ABV <= 7) {
      return "medium";
    } else if (keg.ABV > 7){
      return "strong";
    }
  }
  editKegClicked(clickedKeg: Keg){
    this.clickSender.emit(clickedKeg);
  }
}
