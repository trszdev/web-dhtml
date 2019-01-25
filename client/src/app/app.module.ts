import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PayCardPageComponent } from './pay-card-page/pay-card-page.component';
import { PayBankPageComponent } from './pay-bank-page/pay-bank-page.component';
import { RequestPaymentPageComponent } from './request-payment-page/request-payment-page.component';
import { MenuComponent } from './menu/menu.component';
import { PageTemplateComponent } from './page-template/page-template.component';
import { FieldComponent } from './field/field.component';

@NgModule({
  declarations: [
    AppComponent,
    PayCardPageComponent,
    PayBankPageComponent,
    RequestPaymentPageComponent,
    MenuComponent,
    PageTemplateComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
