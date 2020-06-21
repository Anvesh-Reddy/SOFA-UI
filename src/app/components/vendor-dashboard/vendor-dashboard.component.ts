import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { FoodItem } from 'src/app/models/food-items';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.scss']
})
export class VendorDashboardComponent implements OnInit {

  forecastData = {};
  feedbackData = {};
  forecastDataLoaded = false;
  feedbackDataLoaded = false;
  feedbacksList = [];
  foodItems: Array<FoodItem>;
  currentDayPred = [];
  constructor(private orderDetailsService: OrderDetailsService) { }

  ngOnInit() {
    this.getForecastData();

    this.feedbackData['barChartLabels'] = ['Chicken Biryani', 'Mutton Biryani', 'Fried Rice', 'Rice Combo', 'Pulao'];
    this.feedbackData['barChartData'] = [
      { data: [65, 59, 80, 81, 100], label: 'Happy' },
      { data: [28, 48, 40, 19, 27], label: 'Neutral' },
      { data: [28, 48, 23, 43, 29], label: 'Sad' }
    ];
    this.feedbackDataLoaded = true;
    this.getFeedbackComments();
  }

  getForecastData() {
    this.orderDetailsService.getForecastData().subscribe(
      (data) => {
        let output = data['output'];
        console.log(output);        
        this.forecastData['barChartLabels'] = output[0];
        this.currentDayPred = JSON.parse(JSON.stringify(output[1]));
        this.forecastData['barChartData'] = output[1].splice(0, 10);        
        this.forecastDataLoaded = true;
        console.log(this.forecastData);
        this.getFoodData();
      }
    );
  }

  getFoodData() {
    this.orderDetailsService.getAvailableFoodItems("Lunch").subscribe(
      (data) => {
        console.log("Akash");
        this.foodItems = data['availableItems'] as Array<FoodItem>;
        console.log(this.foodItems);
        console.log(this.currentDayPred);
        let itemValues = {};        
        this.currentDayPred.forEach(element => {
          itemValues[element.label] = element.data[4]
        });
        this.foodItems.forEach(element => {
          element['forecastCount'] = itemValues[element['item_name']];
          let num = Math.random();
          num = num * 10;
          num = Math.ceil(num);
          num = (num % 3) + 1;
          element['orderCount'] = element['forecastCount'] - num;
        });
        // this.getFoodRecommendations();
      }
    );
  }

  getFeedbackComments() {
    this.orderDetailsService.getFeedbackComments().subscribe(
      (data) => {
        this.feedbacksList = data['feedbacks'];
      }
    );
  }

  calculateClasses(item) {
    return {
      'dot': true,
      'r-dot': item.sentiment == 'negative',
      'y-dot': item.sentiment == 'neutral',
      'g-dot': item.sentiment == 'positive'
    };
  }

}
