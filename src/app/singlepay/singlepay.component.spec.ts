import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepayComponent } from './singlepay.component';

describe('SinglepayComponent', () => {
  let component: SinglepayComponent;
  let fixture: ComponentFixture<SinglepayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglepayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglepayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
