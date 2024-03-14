import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  currDiv: string = 'login';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ShowDiv(divVal: string) {
    this.currDiv = divVal;
  }

  home() {
    this.router.navigateByUrl('home');
  }
}
