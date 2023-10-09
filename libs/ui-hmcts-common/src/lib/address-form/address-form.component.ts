import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Address } from "../models";
import { CoreValidators } from "../validators/core-validators";



@Component({
  selector: 'xui-next-address-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent implements OnInit{
  constructor( private fb: FormBuilder) {
    this.emitAddress = new EventEmitter<Address>()
  }
  // @Input() editAddress:Address = {
  //   addressLine1:'',
  //   addressLine2:'',
  //   addressCounty:'',
  //   addressTown:'',
  //   addressPostcode:''
  // }
@Input() editAddress: Address | undefined
  @Output() emitAddress : EventEmitter<Address>

  form = this.fb.group({

      addressLine1:['',Validators.required],
      addressLine2:[''],
      addressCounty:[''],
      addressTown:['', Validators.required],
      addressPostcode:['',[CoreValidators.postcodeValidator]]
      })
//TODO -- There is a bug here postcode validator appears not to be working

  ngOnInit(): void {
    this.resetFields();
  }

  resetForm(){
    this.form.reset();
    this.resetFields();
  }

  private resetFields() {
    this.form.patchValue({ addressLine1: this.editAddress?.addressLine1 });
    this.form.patchValue({ addressLine2: this.editAddress?.addressLine2 });
    this.form.patchValue({ addressCounty: this.editAddress?.addressCounty });
    this.form.patchValue({ addressTown: this.editAddress?.addressTown });
    this.form.patchValue({ addressPostcode: this.editAddress?.addressPostcode });
  }

  onSubmit() {
    if( this.form.valid) {
      this.emitAddress.emit(this.form.value as Address)
    }
  }


}
