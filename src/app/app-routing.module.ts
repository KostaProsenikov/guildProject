import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HomeActivateGuardService } from './home.activate-guard.service';
import { DetailsComponent } from './details/details.component';
import { DetailComponent } from './detail/detail.component';

export enum AppRouts {
  ABOUT = 'about'
}

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [HomeActivateGuardService.canActivate]
  },
  {
    path: 'home/:id',
    component: HomeComponent
  },
  {
    path: AppRouts.ABOUT,
    component: AboutComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'details',
    children: [
      {
        path: 'detail/:id',
        component: DetailComponent
      }
    ]
  },
  {
    path: 'customers',
    loadChildren: ()=> import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'orders',
    loadChildren: ()=> import('./orders/orders.module').then(m => m.OrdersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
