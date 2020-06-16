import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.scss']
})
export class LoginDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    // this.userId == "vendor"
    this.router.navigate(['/dashboard']);
  }

}
