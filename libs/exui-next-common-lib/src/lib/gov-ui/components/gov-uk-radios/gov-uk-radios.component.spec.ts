import {  NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { GovUkRadiosComponent } from './gov-uk-radios.component';

describe('GovUkRadiosComponent', () => {
  let component: GovUkRadiosComponent;
  let fixture: ComponentFixture<GovUkRadiosComponent>;
  const formBuilder: UntypedFormBuilder = new UntypedFormBuilder();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [FormsModule, ReactiveFormsModule, GovUkRadiosComponent],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [
        { provide: UntypedFormBuilder, useValue: formBuilder }
    ]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovUkRadiosComponent);
    component = fixture.componentInstance;
    component.options = { key: 'key', group: null, config: {hint: 'hint', legend: 'legend', id: 'id'}, errors: null, items: []};
    component.errors = { isInvalid: false, messages: ['Error']};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have input element', () => {
    const input = fixture.debugElement.query(By.css('.govuk-radios'));
    expect(input).toBeTruthy();
  });

});
