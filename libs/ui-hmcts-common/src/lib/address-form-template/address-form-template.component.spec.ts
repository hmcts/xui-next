import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressFormTemplateComponent } from './address-form-template.component';

describe('AddressFormTemplateComponent', () => {
  let component: AddressFormTemplateComponent;
  let fixture: ComponentFixture<AddressFormTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressFormTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
