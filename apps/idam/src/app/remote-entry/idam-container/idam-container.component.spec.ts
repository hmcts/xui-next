import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdamContainerComponent } from './idam-container.component';

describe('IdamContainerComponent', () => {
  let component: IdamContainerComponent;
  let fixture: ComponentFixture<IdamContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdamContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IdamContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
