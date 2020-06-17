import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.scss']
})
export class LoginDetailsComponent implements OnInit {

  userId;
  constructor(private router: Router, private comService: CommonService) { }

  ngOnInit() {
  }

  onSubmit(formdata) {
    console.log(formdata);
    console.log(this.userId);
    this.comService.updateCreds(this.userId);    
    this.router.navigate(['/dashboard']);
  }

}
