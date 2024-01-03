import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './Item-grp/items/items.component';
import { TackGenComponent } from './tack-gen/tack-gen.component';
import { MilestoneComponent } from './milestone/milestone.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Item-grp', component: ItemsComponent },
  { path: 'tack-gen', component: TackGenComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'milestone', component: MilestoneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
