import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'xui-next-add-user-bank-details-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-user-bank-details-component.html',
  styleUrls: ['./add-user-bank-details-component.scss'],
})
export class AddUserBankDetailsComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
  }
}
