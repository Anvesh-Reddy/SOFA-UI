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
  getAvailableFoodItems() {
    return this.http.get(this.apiUrl + 'get_ava_food', httpOptions);
  }

  getRecommendedFoodItems(userId: any, currentDate: any) {
    return this.http.post(this.apiUrl + 'get_recom_food', {user_id: userId, date: currentDate}, httpOptions);
  }

  getRatedFoodItems(userId: any, currentDate: any) {
    return this.http.post(this.apiUrl + 'get_rated_food', {user_id: userId, date: currentDate}, httpOptions);
  }

}
