import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import { Address, AddressFormComponent } from "@ui-hmcts-common";

@Component({
  selector: 'xui-next-edit-user-address',
  standalone: true,
  imports: [CommonModule, AddressFormComponent],
  templateUrl: './edit-user-address.component.html',
  styleUrls: ['./edit-user-address.component.scss'],
})
export class EditUserAddressComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
  }
 editData: Address =
{
  addressLine1:'22 Nowhere Lane',
  addressLine2:'',
  addressCounty:'Worcestershire',
  addressTown:'Worcester',
  addressPostcode:'WR4 9BZ'
}

  submitNext() {
    this.router.navigate(['bank-details'],{relativeTo: this.route.parent});
  }

  onUpdateAddress(evt:Address) {
    console.log(evt);

  }
}
