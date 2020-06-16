import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBell, faCogs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SOFA-UI';
  faBell = faBell;
  faCogs = faCogs;  
  showSplash = true;

  constructor(private router: Router) {
    this.router.navigate(['']);
  }

  ngOnInit() {    
    setTimeout(()=> {
      this.showSplash = false;      
    }, 2000);
    // document.getElementByID('splash').style.display = 'none';
    // console.log(this.myDiv.nativeElement.innerHTML);
  }

}
