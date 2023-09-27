import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'xui-next-add-user-address-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-user-address-component.html',
  styleUrls: ['./add-user-address-component.scss'],
})
export class AddUserAddressComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
  }
  submitNext() {
    this.router.navigate(['bank-details'],{relativeTo: this.route.parent});
  }
}
