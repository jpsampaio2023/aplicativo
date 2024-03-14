import { Component, Inject } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/models/contants.models';
import { MyEvent } from 'src/services/myevent.services';
import { AppConfig, APP_CONFIG } from './app.config';
import { NgwWowService } from 'ngx-wow';
import { Helper } from 'src/models/helper.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'groshopweb';
  rtlSide = "left";
  showHeader: boolean = true;
  toggleClass = false;
  checked = false;
  constructor(
    @Inject(APP_CONFIG) public config: AppConfig, private router: Router, private wowService: NgwWowService,
    private translate: TranslateService, private myEvent: MyEvent) {
    this.initializeApp();
    // console.log(this.router)
    this.wowService.init();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart || event instanceof NavigationEnd) {
        console.log(event.url);
        if (event.url == "/" || event.url == "/sign-in") this.showHeader = false; else this.showHeader = true;
      }
    });
    this.myEvent.getLanguageObservable().subscribe(value => {
      if (value.doNav) {
        this.router.navigateByUrl('sign-in');
      }
      this.globalize(value.lang);
    });
  }

  initializeApp() {
    let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
    // this.router.navigateByUrl('sign-in');
    this.showHeader = true;
    this.globalize(defaultLang);
    this.darkModeSetting();
  }


  globalize(languagePriority: any) {
    this.translate.setDefaultLang("en");
    let defaultLangCode = this.config.availableLanguages[0].code;
    this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
  }

  setDirectionAccordingly(lang: string) {
    switch (lang) {
      case 'ar': {
        this.rtlSide = "rtl";
        break;
      }
      default: {
        this.rtlSide = "ltr";
        break;
      }
    }
  }

  ngOnInit() {
    // this.theme_mode = Helper.getThemeMode(this.config.defaultThemeMode);
  }

  home() {
    this.router.navigateByUrl('home');
    this.toggleClass = false;
  }
  wallet() {
    this.router.navigateByUrl('wallet');
    this.toggleClass = false;
  }
  my_offers() {
    this.router.navigateByUrl('my-offers');
    this.toggleClass = false;
  }
  my_orders() {
    this.router.navigateByUrl('my-orders');
    this.toggleClass = false;
  }
  my_account() {
    this.router.navigateByUrl('my-account');
    this.toggleClass = false;
  }
 
  support() {
    this.router.navigateByUrl('support');
    this.toggleClass = false;
  }
  privacy_policy() {
    this.router.navigateByUrl('privacy-policy');
    this.toggleClass = false;
  }
  language() {
    this.router.navigateByUrl('change-language');
    this.toggleClass = false;
  }
  logout() {
    this.router.navigateByUrl('sign-in');
    this.toggleClass = false;
  }
  
  checkout() {
    this.router.navigateByUrl('checkout');
    this.toggleClass = false;
  }

  vendorInfo() {
    this.router.navigateByUrl('vendor-info');
    this.toggleClass = false;
  }
 
  // home2() {
  //   this.router.navigateByUrl('home');
  //   this.toggleClass = !this.toggleClass;
  // }
 
  ToggleClass() {
    this.toggleClass = !this.toggleClass;
 
  }
  closeMenu() {
    this.toggleClass = false;
  }

  
  darkModeSetting() {
    document.body.setAttribute('class', (Helper.getThemeMode(this.config.defaultThemeMode) == Constants.THEME_MODE_DARK ? 'dark-theme' : 'light-theme'));
  }
}
