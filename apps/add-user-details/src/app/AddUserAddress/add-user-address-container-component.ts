import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import { AddressFormComponent } from "@ui-hmcts-common";

@Component({
  selector: 'xui-next-add-user-address-component',
  standalone: true,
  imports: [CommonModule, AddressFormComponent],
  templateUrl: './add-user-address-container-component.html',
  styleUrls: ['./add-user-address-container-component.scss'],
})
export class AddUserAddressContainerComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
  }
  submitNext() {
    this.router.navigate(['bank-details'],{relativeTo: this.route.parent});
  }
}
