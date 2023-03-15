import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglenComponent } from './singlen.component';

describe('SinglenComponent', () => {
  let component: SinglenComponent;
  let fixture: ComponentFixture<SinglenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
