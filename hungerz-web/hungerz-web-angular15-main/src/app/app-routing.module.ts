import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { SignInComponent } from './sign-in/sign-in.component'; 
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { SupportComponent } from './support/support.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ChangeLanguageComponent } from './change-language/change-language.component';
import { MyOffersComponent } from './my-offers/my-offers.component';
import { VendorInfoComponent } from './vendor-info/vendor-info.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { SendToBankComponent } from './send-to-bank/send-to-bank.component';
import { WalletComponent } from './wallet/wallet.component';
        

const routes: Routes = [
  { path: "", redirectTo: "sign-in", pathMatch: "full" }, 
  { path: "home", component: HomeComponent }, 
  { path: "my-orders", component: MyOrdersComponent },
  { path: "sign-in", component: SignInComponent }, 
  { path: "checkout", component: CheckoutComponent },
  { path: "order-placed", component: OrderPlacedComponent },
  { path: "my-account", component: MyAccountComponent },
  { path: "support", component: SupportComponent },
  { path: "privacy-policy", component: PrivacyPolicyComponent },
  { path: "change-language", component: ChangeLanguageComponent },
  { path: "my-offers", component: MyOffersComponent },
  { path: "vendor-info", component: VendorInfoComponent },
  { path: "sub-category", component: SubCategoryComponent },
  { path: "send-to-bank", component: SendToBankComponent },
  { path: "wallet", component: WalletComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
