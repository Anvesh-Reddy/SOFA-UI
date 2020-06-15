import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faBell, faCogs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SOFA-UI';
  faBell = faBell;
  faCogs = faCogs;
  constructor(private router: Router) {
    this.router.navigate(['']);
  }
}
