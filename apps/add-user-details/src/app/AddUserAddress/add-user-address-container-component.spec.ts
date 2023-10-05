import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddUserAddressContainerComponent } from './add-user-address-container-component';

describe('AddUserAddressComponentComponent', () => {
  let component: AddUserAddressContainerComponent;
  let fixture: ComponentFixture<AddUserAddressContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUserAddressContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddUserAddressContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
