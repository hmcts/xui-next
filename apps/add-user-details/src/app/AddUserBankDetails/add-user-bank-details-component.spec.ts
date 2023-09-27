import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddUserBankDetailsComponent } from './add-user-bank-details-component';

describe('AddUserBankDetailsComponentComponent', () => {
  let component: AddUserBankDetailsComponent;
  let fixture: ComponentFixture<AddUserBankDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUserBankDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddUserBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
