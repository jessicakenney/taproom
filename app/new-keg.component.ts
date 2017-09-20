import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <div>
     <label>Enter Keg Name:</label>
     <input #newName>
     <button (click)="submitForm(newName.value)">Add</button>
   </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();


  submitForm (newName: string){
    var newKegToAdd: Keg = new Keg(newName,"aaa", 5, 5);
    this.newKegSender.emit(newKegToAdd)
  }

}
