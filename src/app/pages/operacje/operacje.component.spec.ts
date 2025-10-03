import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacjeComponent } from './operacje.component';

describe('OperacjeComponent', () => {
  let component: OperacjeComponent;
  let fixture: ComponentFixture<OperacjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperacjeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperacjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
