import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

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
  constructor(private orderDetailsService: OrderDetailsService) { }

  ngOnInit() {  
    this.getForecastData();

    this.feedbackData['barChartLabels'] = ['Chicken Biryani', 'Mutton Biryani', 'Fried Rice','Rice Combo','Pulao'];
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
        this.forecastData['barChartData'] = output[1].splice(0,10);               
        this.forecastDataLoaded = true;
        console.log(this.forecastData);
      }
    );
  }

  getFeedbackComments() {
    this.orderDetailsService.getFeedbackComments().subscribe(
      (data) => {
        console.log(data);
        this.feedbacksList = data['feedbacks'];
        console.log(this.feedbacksList);
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
