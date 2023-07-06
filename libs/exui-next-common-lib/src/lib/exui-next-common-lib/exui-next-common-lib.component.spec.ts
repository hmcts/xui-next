import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExuiNextCommonLibComponent } from './exui-next-common-lib.component';

describe('ExuiNextCommonLibComponent', () => {
  let component: ExuiNextCommonLibComponent;
  let fixture: ComponentFixture<ExuiNextCommonLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExuiNextCommonLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExuiNextCommonLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
