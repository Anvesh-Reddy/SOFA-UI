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
  constructor(private orderDetailsService: OrderDetailsService) { }

  ngOnInit() {    
    
    // this.forecastData['barChartLabels'] = ['2020-06-20', '2020-06-21', '2020-06-22','2020-06-23','2020-06-24'];
    // this.forecastData['barChartData'] = [
    //   { data: [65, 59, 80, 81,105], label: 'Chicken Biryani' },
    //   { data: [28, 48, 40, 19, 65], label: 'Fried Rice' },
    //   { data: [28, 48, 34, 65, 26], label: 'Egg Biryani' }
    // ];
    this.getForecastData();

    this.feedbackData['barChartLabels'] = ['Chicken Biryani', 'Mutton Biryani', 'Fried Rice','Rice Combo','Pulao'];
    this.feedbackData['barChartData'] = [
      { data: [65, 59, 80, 81, 100], label: 'Happy' },
      { data: [28, 48, 40, 19, 27], label: 'Neutral' },
      { data: [28, 48, 23, 43, 29], label: 'Sad' }
    ];
    this.feedbackDataLoaded = true;
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

}
