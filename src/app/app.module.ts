import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './Item-grp/items/items.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StModifierPipe } from './Pipe/st-modifier.pipe';

@NgModule({
  declarations: [AppComponent, ItemsComponent, StModifierPipe],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
