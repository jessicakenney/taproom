import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onFilterChange($event.target.value)">
      <option value="allKegs" selected="selected">All Kegs</option>
      <option value="fullKegs">Kegs Greater than 100</option>
      <option value="almostEmptyKegs">Kegs Less Than 10</option>
 </select>
 <hr>
  <ul>
    <div *ngFor = "let keg of childKegList | whatsRemaining:filterByRemainingPints" class="well">
      <h3> {{keg.name}} </h3>
      <h4> {{keg.brand}}</h4>
      <h5> Pint Price <em>(16oz)</em> : $ {{keg.pintPrice}}</h5>
      <h5 [class]="ABVColor(keg)"> <em> ABV: {{keg.ABV}}% </em></h5>
      <button (click)="pourPint(keg)">Pour Pint</button>
      <button (click)="editKegClicked(keg)">Edit</button>
      <h4> Remaining Pints: {{keg.remainingPints}} </h4>
   </div>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() pourClickedSender = new EventEmitter();
  filterByRemainingPints: string = "fullKegs";

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

  pourPint(clickedKeg){
    if (clickedKeg.remainingPints > 0) {
      clickedKeg.remainingPints--
    }
  }
  onFilterChange(optionFromMenu){
    this.filterByRemainingPints = optionFromMenu;
  }

}
