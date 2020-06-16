import { OrderDetailsService } from './../../services/order-details.service';
import { Component, OnInit } from '@angular/core';
import { FoodItems } from 'src/app/models/food-items';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {
  categorySelected = null;
  foodItems: Array<string>;
  constructor(private orderDetailsService: OrderDetailsService) { }

  ngOnInit() {
    this.categorySelected = 'Lunch';
    this.onCategorySelection();
  }

  onCategorySelection() {
    this.orderDetailsService.getAvailableFoodItems().subscribe(
      (data) => {
        this.foodItems = data as Array<string>;
        console.log(this.foodItems);
      }
    );
  }

}
