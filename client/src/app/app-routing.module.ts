import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestPaymentPageComponent } from './request-payment-page/request-payment-page.component'
import { PayBankPageComponent } from './pay-bank-page/pay-bank-page.component'
import { PayCardPageComponent } from './pay-card-page/pay-card-page.component'

const routes: Routes = [
  { path: 'request-payment', component: RequestPaymentPageComponent, data: { title: 'Запросить платёж' } },
  { path: 'pay/card', component: PayCardPageComponent, data: { title: 'Заплатить с карты' } },
  { path: 'pay/bank', component: PayBankPageComponent, data: { title: 'Заплатить из интернет-банка' } },
  { path: '**', redirectTo: '/pay/card' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
