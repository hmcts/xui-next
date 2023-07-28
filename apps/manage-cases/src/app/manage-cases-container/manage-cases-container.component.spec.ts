import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCasesContainerComponent } from './manage-cases-container.component';

describe('ManageCasesContainerComponent', () => {
  let component: ManageCasesContainerComponent;
  let fixture: ComponentFixture<ManageCasesContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ManageCasesContainerComponent]
    });
    fixture = TestBed.createComponent(ManageCasesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
