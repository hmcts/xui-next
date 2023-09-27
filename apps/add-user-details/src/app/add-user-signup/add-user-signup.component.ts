import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";

@Component({
  selector: 'xui-next-add-user-signup',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl:'add-user-signup-component.html',
  styleUrls: ['./add-user-signup.component.scss'],
})
export class AddUserSignupComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
  }
  submitNext() {
    this.router.navigate(['addAddress'],{relativeTo: this.route});
  }
}
