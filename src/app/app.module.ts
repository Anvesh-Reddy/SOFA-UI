import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { FeedbackDetailsComponent } from './components/feedback-details/feedback-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrderDetailsComponent,
    PaymentDetailsComponent,
    FeedbackDetailsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
