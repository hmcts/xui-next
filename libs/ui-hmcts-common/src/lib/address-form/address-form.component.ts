import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
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
      addressPostcode:['',[Validators.required,Validators.pattern(/^(([A-Za-z]{1,2}[0-9][A-Za-z0-9]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?[0-9][A-Za-z]{2}|BFPO ?[0-9]{1,4}|(KY[0-9]|MSR|VG|AI)[ -]?[0-9]{4}|[A-Za-z]{2} ?[0-9]{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$/)]
]      })

  // The use of a pattern validator here is intended to show a stand alone method for
  // validating any regex you would care to use.
  // Of course it might be more appropriate to write a custom validator function

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
