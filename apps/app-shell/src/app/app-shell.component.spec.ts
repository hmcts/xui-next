import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppShellComponent } from './app-shell.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '' },
        ]),
      ],
      declarations: [AppShellComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppShellComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app-shell'`, () => {
    const fixture = TestBed.createComponent(AppShellComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app-shell');
  });

  it('should render title', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppShellComponent);
    const router = TestBed.inject(Router);
    fixture.ngZone?.run(() => router.navigate(['']));
    tick();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome app-shell'
    );
  }));
});
