import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { KegListComponent } from './keg-list.component';
import { EditKegComponent} from './edit-keg.component';
import { NewKegComponent} from './new-keg.component';
import { RemaingPintsPipe} from './whatsRemaining.pipe';
import { PricePipe} from './priceCheck.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, KegListComponent , EditKegComponent, NewKegComponent, RemaingPintsPipe, PricePipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule {}
