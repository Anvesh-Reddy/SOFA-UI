import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnChanges {

  empDashboard = true;
  constructor(private router: Router, private comService: CommonService) { }

  ngOnInit() {
    debugger;
    if (this.comService.getCreds() == 'vendor') {
      this.empDashboard = false;
    } else {
      this.empDashboard = true;
    }
  }

  ngOnChanges() {
    
  }

  goToLoginPage() {
    this.router.navigate(['/login']);
  }

}
