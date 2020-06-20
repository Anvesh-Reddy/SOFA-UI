import { ReminderComponent } from './../reminder/reminder.component';
import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('reminderModal', {static: false}) reminderModal: ReminderComponent;
  empDashboard = true;
  constructor(private router: Router, private comService: CommonService) { }

  ngOnInit() {
    if (this.comService.getCreds() === 'vendor') {
      this.empDashboard = false;
    } else {
      this.empDashboard = true;
    }
  }

  goToLoginPage() {
    this.router.navigate(['/login']);
  }

  openReminderModal() {
    this.reminderModal.open();
  }

}
