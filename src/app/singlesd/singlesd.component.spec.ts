import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglesdComponent } from './singlesd.component';

describe('SinglesdComponent', () => {
  let component: SinglesdComponent;
  let fixture: ComponentFixture<SinglesdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglesdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglesdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
