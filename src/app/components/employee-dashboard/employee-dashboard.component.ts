import { PastOrder } from './../../models/past-orders';
import { OrderDetailsService } from './../../services/order-details.service';
import { Component, OnInit } from '@angular/core';
import { FoodItems } from 'src/app/models/food-items';
import { faPlusCircle, faSmile, faFrown, faMeh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faSmile = faSmile;
  faFrown = faFrown;
  faMeh = faMeh;
  categorySelected = null;
  userId = 1046;
  foodItems: Array<string>;
  pastOrders: PastOrder[];
  constructor(private orderDetailsService: OrderDetailsService) { }

  ngOnInit() {
    this.categorySelected = 'Lunch';
    this.onCategorySelection();
    this.getPastOrders();
  }

  onCategorySelection() {
    this.orderDetailsService.getAvailableFoodItems(this.categorySelected).subscribe(
      (data) => {
        this.foodItems = data['availableItems'] as Array<string>;
        console.log(this.foodItems);
      }
    );
  }

  getPastOrders() {
    this.orderDetailsService.getPastOrders(this.userId).subscribe(
      (data) => {
        this.pastOrders = data['past_orders'] as Array<PastOrder>;
        console.log(this.pastOrders);
      }
    );
  }

}
