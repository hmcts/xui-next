import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmctsUiCommonComponent } from './hmcts-ui-common.component';

describe('HmctsUiCommonComponent', () => {
  let component: HmctsUiCommonComponent;
  let fixture: ComponentFixture<HmctsUiCommonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HmctsUiCommonComponent]
    });
    fixture = TestBed.createComponent(HmctsUiCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
