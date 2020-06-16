import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { FeedbackDetailsComponent } from './components/feedback-details/feedback-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AmountDetailsComponent } from './components/amount-details/amount-details.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { VendorDashboardComponent } from './components/vendor-dashboard/vendor-dashboard.component';
import { LoginDetailsComponent } from './components/login-details/login-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrderDetailsComponent,
    PaymentDetailsComponent,
    FeedbackDetailsComponent,
    UserDetailsComponent,
    AmountDetailsComponent,
    EmployeeDashboardComponent,
    VendorDashboardComponent,
    LoginDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
