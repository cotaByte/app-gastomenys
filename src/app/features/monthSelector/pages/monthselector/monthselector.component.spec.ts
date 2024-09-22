import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthselectorComponent } from './monthselector.component';

describe('MonthselectorComponent', () => {
  let component: MonthselectorComponent;
  let fixture: ComponentFixture<MonthselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthselectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
