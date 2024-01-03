import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './Item-grp/items/items.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StModifierPipe } from './Pipe/st-modifier.pipe';
import { TackGenComponent } from './tack-gen/tack-gen.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MilestoneComponent } from './milestone/milestone.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    StModifierPipe,
    TackGenComponent,
    HomeComponent,
    NavbarComponent,
    MilestoneComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
