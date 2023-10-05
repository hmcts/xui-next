import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Address } from "../models";



@Component({
  selector: 'xui-next-address-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent implements OnInit{
  constructor( private fb: FormBuilder) {
  }
  // @Input() editAddress:Address = {
  //   addressLine1:'',
  //   addressLine2:'',
  //   addressCounty:'',
  //   addressTown:'',
  //   addressPostcode:''
  // }
@Input() editAddress: Address | undefined

  form = this.fb.group({

      addressLine1:[''],
      addressLine2:[''],
      addressCounty:[''],
      addressTown:[''],
      addressPostcode:['']
      })
  

  ngOnInit(): void {
    this.resetAddress();
  }

  private resetAddress() {
    this.form.patchValue({ addressLine1: this.editAddress?.addressLine1 });
    this.form.patchValue({ addressLine2: this.editAddress?.addressLine2 });
    this.form.patchValue({ addressCounty: this.editAddress?.addressCounty });
    this.form.patchValue({ addressTown: this.editAddress?.addressTown });
    this.form.patchValue({ addressPostcode: this.editAddress?.addressPostcode });
  }

  onSubmit() {

  }


}
