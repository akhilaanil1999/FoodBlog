import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersingleComponent } from './ordersingle.component';

describe('OrdersingleComponent', () => {
  let component: OrdersingleComponent;
  let fixture: ComponentFixture<OrdersingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
