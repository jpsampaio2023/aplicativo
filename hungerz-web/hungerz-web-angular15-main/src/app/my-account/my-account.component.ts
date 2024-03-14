import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddAddressComponent } from '../add-address/add-address.component';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent {
  toggleClass1 = true;
  toggleClass2 = false;
  showSection = 1;
  constructor(private router: Router, private modalService: NgbModal) { }

  my_profile() {
    this.toggleClass1 = !this.toggleClass1;
    this.toggleClass2 = false; 
    this.showSection = 1;
  }

  my_address() {
    this.toggleClass2 = !this.toggleClass2;
    this.toggleClass1 = false; 
    this.showSection = 2;
  }

  addNewAddress() {
    const modalRef = this.modalService.open(AddAddressComponent, {windowClass: 'addNewAdressModel, fullWidth'});
  }
}
