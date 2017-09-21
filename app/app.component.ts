import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Epicodus Beer Shed</h1>
    <new-keg (newKegSender)="addKeg($event)"> </new-keg>
    <div class="row">
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)" (pourClickedSender)="pourPint($event)" ></keg-list>
    </div>
    <hr>
    <edit-keg [childSelectedKeg]="selectedKeg" (editDoneButtonClickedSender)="doneEditing()"> </edit-keg>
  </div>
  `
})

export class AppComponent{

  masterKegList: Keg[] = [
    new Keg('Orbiter IPA', 'Ecliptic', 5, 7.4),
    new Keg('Fresh Hop IPA', 'Great Notion', 4, 7),
    new Keg('GrapeFruit Sour', 'Gilgamesh', 3, 5)
  ];
  selectedKeg = null;

  editKeg(clickedKeg ){
    this.selectedKeg = clickedKeg;
  }

  doneEditing(){
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg){
    this.masterKegList.push(newKegFromChild);
  }

}
