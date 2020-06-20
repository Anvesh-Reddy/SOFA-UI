import { Feedback } from './../models/feedback';
import { PastOrder } from './../models/past-orders';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  getAvailableFoodItems(order_cat: string) {
    return this.http.get(this.apiUrl + 'get_ava_food?order_cat=' + order_cat.toString(), httpOptions);
  }

  getRecommendedFoodItems(userId: any, orderCategory: string) {
    return this.http.post(this.apiUrl + 'get_recom_food', {user_id: userId, order_category: orderCategory, date: null}, httpOptions);
  }

  getRatedFoodItems(userId: any, currentDate: any) {
    return this.http.post(this.apiUrl + 'get_rated_food', {user_id: userId, date: currentDate}, httpOptions);
  }

  getPastOrders(userId: any) {
    return this.http.post(this.apiUrl + 'get_past_orders', {user_id: userId}, httpOptions);
  }

  saveOrderFeedback(pastOrder: Feedback) {
    return this.http.post(this.apiUrl + 'save_feedback', pastOrder, httpOptions);
  }

  getForecastData() {
    return this.http.get(this.apiUrl + 'get_forecast_data', httpOptions);
  }

  getFeedbackComments() {
    return this.http.get(this.apiUrl + 'get_feedbacks', httpOptions);
  }
}
