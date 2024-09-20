import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoItemComponent } from './gasto-item.component';

describe('GastoItemComponent', () => {
  let component: GastoItemComponent;
  let fixture: ComponentFixture<GastoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GastoItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GastoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
