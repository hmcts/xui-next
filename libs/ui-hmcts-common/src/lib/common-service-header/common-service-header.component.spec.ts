import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonServiceHeaderComponent } from './common-service-header.component';

describe('CommonServiceHeaderComponent', () => {
  let component: CommonServiceHeaderComponent;
  let fixture: ComponentFixture<CommonServiceHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonServiceHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommonServiceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
