import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; 
import { SendToBankComponent } from '../send-to-bank/send-to-bank.component';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {
  constructor(private router: Router, private modalService: NgbModal) { }

  sendToBank() {
     const modalRef = this.modalService.open(SendToBankComponent, {windowClass: 'fullWidth'}) ;
   }
}
