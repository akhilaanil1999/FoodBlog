import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingledComponent } from './singled.component';

describe('SingledComponent', () => {
  let component: SingledComponent;
  let fixture: ComponentFixture<SingledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
