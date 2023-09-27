import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddUserSignupComponent } from './add-user-signup.component';

describe('AddUserSignupComponent', () => {
  let component: AddUserSignupComponent;
  let fixture: ComponentFixture<AddUserSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUserSignupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddUserSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
