import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vendor-info',
  templateUrl: './vendor-info.component.html',
  styleUrls: ['./vendor-info.component.scss']
})
export class VendorInfoComponent {
  toggleClass1 = true;
  toggleClass2 = false;
  toggleClass3 = false;
  toggleClass4 = false;
  toggleClass5 = false;
  toggleClass6 = false;
  showSection = 1;
  toggleClass = false;
  constructor(private router: Router, private modalService: NgbModal) { }

  saveToFavorite() {
    this.toggleClass = !this.toggleClass;
  }
 
  sectionShowButton(position: number) {
    this.showSection = position;  
    if (this.showSection == 1) { 
      this.toggleClass1 = true;
      this.toggleClass2 = false;
      this.toggleClass3 = false;
      this.toggleClass4 = false;
      this.toggleClass5 = false;
      this.toggleClass6 = false; 
    }
    if (this.showSection == 2) { 
      this.toggleClass1 = false;
      this.toggleClass2 = true;
      this.toggleClass3 = false;
      this.toggleClass4 = false;
      this.toggleClass5 = false;
      this.toggleClass6 = false; 
    }
    if (this.showSection == 3) { 
      this.toggleClass1 = false;
      this.toggleClass2 = false;
      this.toggleClass3 = true;
      this.toggleClass4 = false;
      this.toggleClass5 = false;
      this.toggleClass6 = false; 
    }
    if (this.showSection == 4) { 
      this.toggleClass1 = false;
      this.toggleClass2 = false;
      this.toggleClass3 = false;
      this.toggleClass4 = true;
      this.toggleClass5 = false;
      this.toggleClass6 = false; 
    }
    if (this.showSection == 5) { 
      this.toggleClass1 = false;
      this.toggleClass2 = false;
      this.toggleClass3 = false;
      this.toggleClass4 = false;
      this.toggleClass5 = true;
      this.toggleClass6 = false; 
    }
    if (this.showSection == 6) { 
      this.toggleClass1 = false;
      this.toggleClass2 = false;
      this.toggleClass3 = false;
      this.toggleClass4 = false;
      this.toggleClass5 = false;
      this.toggleClass6 = true; 
    }
  }

  addNewAddress() {
    // const modalRef = this.modalService.open(AddAddressComponent);
  }

  checkout() {
    this.router.navigateByUrl('checkout');
  }

  
}
