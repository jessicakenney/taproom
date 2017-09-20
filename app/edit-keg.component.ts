import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({

  selector: 'edit-keg',
  template: `
  <div>
    <div *ngIf="childSelectedKeg">
      <h3>Edit Keg</h3>
      <input [(ngModel)]="childSelectedKeg.name">
      <input [(ngModel)]="childSelectedKeg.brand">
      <input [(ngModel)]="childSelectedKeg.pintPrice">
      <input [(ngModel)]="childSelectedKeg.ABV">
      <br>
      <button (click)="editDoneButtonClicked()">Done</button>
    </div>
  </div>

  `
})

export class EditKegComponent{
  @Input() childSelectedKeg: Keg;
  @Output() editDoneButtonClickedSender = new EventEmitter();


  editDoneButtonClicked() {
    this.editDoneButtonClickedSender.emit();
  }

}
