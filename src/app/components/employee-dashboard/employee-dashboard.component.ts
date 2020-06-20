import { Feedback } from './../../models/feedback';
import { FoodItem } from './../../models/food-items';
import { PastOrder } from './../../models/past-orders';
import { OrderDetailsService } from './../../services/order-details.service';
import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faSmile, faFrown, faMeh, faStar } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

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
  faStar = faStar;
  categorySelected = null;
  userId = 1046;
  foodItems: Array<FoodItem>;
  pastOrders: PastOrder[];
  foodRecommendations: Array<string>;
  constructor(private orderDetailsService: OrderDetailsService) { }

  ngOnInit() {
    this.categorySelected = 'Lunch';
    this.onCategorySelection();
    this.getPastOrders();
  }

  onCategorySelection() {
    this.orderDetailsService.getAvailableFoodItems(this.categorySelected).subscribe(
      (data) => {
        this.foodItems = data['availableItems'] as Array<FoodItem>;
        console.log(this.foodItems);
        this.getFoodRecommendations();
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

  getFoodRecommendations() {
    this.orderDetailsService.getRecommendedFoodItems(this.userId, this.categorySelected).subscribe(
      (data) => {
        this.foodRecommendations = data['food_list'] as Array<string>;
        console.log(this.foodRecommendations);
        if (this.foodRecommendations.length === 0) {
          this.foodRecommendations.push(this.foodItems[0].item_name);
        }
      }
    );
  }

  isRecommeded(item: string) {
    if (this.foodRecommendations.length > 0) {
      return this.foodRecommendations.filter(x => x === item).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  saveFeedback(pastOrder: PastOrder) {
    console.log(pastOrder);
    const orderFeedback = new Feedback();
    orderFeedback.order_id = pastOrder.order_id;
    orderFeedback.emoji = Number(pastOrder.rating);
    orderFeedback.comment = pastOrder.feedback;
    this.orderDetailsService.saveOrderFeedback(orderFeedback).subscribe(
      (res) => {
        this.feedbackSentAlert();
      }
    );
  }

  updateRating(rating: number, order_id: number) {
    const order = this.pastOrders.filter(x => x.order_id === order_id)[0];
    const idx = this.pastOrders.indexOf(order);
    this.pastOrders[idx].rating = rating.toString();
  }

  updateCategory(orderCategory: string) {
    this.categorySelected = orderCategory;
    this.onCategorySelection();
  }

  performPaymentAlert() {
    let timerInterval;
    Swal.fire({
      // title: 'Auto close alert!',
      html: 'Please wait while you are navigated to payment page.',
      timer: 2000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getContent();
          if (content) {
            const b = content.querySelector('b');
            if (b) {
              b.textContent = Swal.getTimerLeft().toString();
            }
          }
        }, 100);
      },
      onClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer');
      }
    });
  }

  feedbackSentAlert() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your feedback has been sent successfully',
      showConfirmButton: false,
      timer: 1500
    });
  }

  orderPlacedAlert() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your order has been placed successfully',
      showConfirmButton: false,
      timer: 1500
    });
  }

  showOrderPlacedAlert(item: string) {
    Swal.fire({
      title: 'Sweet!',
      text: 'Press OK to confirm and place your order on ' + item + '.',
      imageUrl: 'assets/food_items/chicken_biryani.jpg',
      imageAlt: 'Custom image',
    }).then(() => {
      this.orderPlacedAlert();
    });
  }
}
