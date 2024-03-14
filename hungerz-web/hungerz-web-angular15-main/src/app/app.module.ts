import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { APP_CONFIG, BaseAppConfig } from './app.config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';  
import { FormsModule } from '@angular/forms';
  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgwWowModule } from 'ngx-wow';
import { HomeComponent } from './home/home.component'; 
import { MyOrdersComponent } from './my-orders/my-orders.component'; 
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DownloadOurAppComponent } from './download-our-app/download-our-app.component';
import { OffersComponent } from './offers/offers.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component'; 
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { SupportComponent } from './support/support.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ChangeLanguageComponent } from './change-language/change-language.component';
import { MyOffersComponent } from './my-offers/my-offers.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { TodayDiscountComponent } from './today-discount/today-discount.component';
import { VendorInfoComponent } from './vendor-info/vendor-info.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { BookTableComponent } from './book-table/book-table.component'; 
import { Observable, from } from 'rxjs';
import { WalletComponent } from './wallet/wallet.component';
import { SendToBankComponent } from './send-to-bank/send-to-bank.component'; 

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export class LazyTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return from(import(`../assets/i18n/${lang}.json`));
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    MyOrdersComponent,
    DownloadOurAppComponent,
    OffersComponent,
    FooterComponent,
    SignInComponent, 
    CheckoutComponent,
    OrderPlacedComponent,
    MyAccountComponent,
    SupportComponent,
    PrivacyPolicyComponent,
    ChangeLanguageComponent,
    MyOffersComponent,
    AddAddressComponent,
    TodayDiscountComponent,
    VendorInfoComponent,
    SubCategoryComponent,
    ReviewsComponent,
    BookTableComponent,
    WalletComponent,
    SendToBankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule,
    FormsModule, 
    NgwWowModule,  
    CarouselModule,   
    BrowserAnimationsModule,    
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: LazyTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: APP_CONFIG, useValue: BaseAppConfig },
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }

