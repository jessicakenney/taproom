import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <div *ngIf="!showNewKegForm">
    <button (click)="newKegButtonClicked()">Add a New Keg</button>
  </div>

  <div *ngIf="showNewKegForm" class="newKegForm">
    <h1>New Keg</h1>
    <div>
       <label>Enter Keg Name:</label>
       <input #newName>
       <br>
       <label>Enter Keg Brand:</label>
       <input #newBrand>
       <br>
       <label>Enter Keg Price:</label>
       <input #newPrice>
       <br>
       <label>Enter Keg ABV:</label>
       <input #newABV>
       <br>
       <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newABV.value); newName.value=''; newBrand.value=''; newPrice.value=''; newABV.value='';">Add</button>
       <br>
     </div>
   </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  showNewKegForm : boolean;

  submitForm (newName: string, newBrand: string, newPrice: number, newABV: number){
    var newKegToAdd: Keg = new Keg(newName, newBrand, newPrice, newABV);
    this.newKegSender.emit(newKegToAdd)
    this.showNewKegForm = false;
  }

  newKegButtonClicked(){
      this.showNewKegForm = true;
  }

}
