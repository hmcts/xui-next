import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiHmctsCommonComponent } from './ui-hmcts-common.component';

describe('UiHmctsCommonComponent', () => {
  let component: UiHmctsCommonComponent;
  let fixture: ComponentFixture<UiHmctsCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiHmctsCommonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiHmctsCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
