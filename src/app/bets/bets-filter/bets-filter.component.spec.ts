import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetsFilterComponent } from './bets-filter.component';

describe('BetsFilterComponent', () => {
  let component: BetsFilterComponent;
  let fixture: ComponentFixture<BetsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetsFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
