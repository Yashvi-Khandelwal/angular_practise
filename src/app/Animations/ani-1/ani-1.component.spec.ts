import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ani1Component } from './ani-1.component';

describe('Ani1Component', () => {
  let component: Ani1Component;
  let fixture: ComponentFixture<Ani1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ani1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ani1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
