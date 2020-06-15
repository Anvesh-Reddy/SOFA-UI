import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
<<<<<<< HEAD
  { path: 'dashboard', component: DashboardComponent  }
=======
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'orders', component: OrderDetailsComponent},
  {path: '**', redirectTo: 'dashboard'}
>>>>>>> 7c8326c730d6feec6be825c65fe1518a2fcf6d42
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
