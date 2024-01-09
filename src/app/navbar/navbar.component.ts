import { Component } from '@angular/core';
import { link } from '../Models/Link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  links: link[] = [
    { title: 'home', url: '/home' },
    { title: 'item redeemer', url: '/Item-grp' },
    { title: 'activity form generator', url: '/tack-gen' },
    { title: 'Milestones & crafts', url: '/milestone' },
    { title: 'breeding sim', url: '/breeding' },
  ];
}
