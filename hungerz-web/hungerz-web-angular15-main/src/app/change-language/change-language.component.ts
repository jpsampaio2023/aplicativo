import { Component, Inject, OnInit } from '@angular/core';
import { Constants } from 'src/models/contants.models';
import { MyEvent } from 'src/services/myevent.services';
import { AppConfig, APP_CONFIG } from '../app.config'; 

@Component({
  selector: 'app-change-language',
  templateUrl: './change-language.component.html',
  styleUrls: ['./change-language.component.scss']
})
export class ChangeLanguageComponent {
  defaultLanguageCode: any;
  languages: Array<{ code: string, name: string }>; 
  constructor(@Inject(APP_CONFIG) private config: AppConfig, private myEvent: MyEvent) {
    this.languages = this.config.availableLanguages;
    this.defaultLanguageCode = config.availableLanguages[0].code;
    let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
    if (defaultLang) this.defaultLanguageCode = defaultLang;
  }

  ngOnInit() {
  } 

  languageConfirm() {
    this.myEvent.setLanguageData(this.defaultLanguageCode);
    // window.localStorage.setItem(Constants.KEY_DEFAULT_LANGUAGE, this.defaultLanguageCode);
  }
}
