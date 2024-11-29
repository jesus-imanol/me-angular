import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFrameworksComponent } from './card-frameworks.component';

describe('CardFrameworksComponent', () => {
  let component: CardFrameworksComponent;
  let fixture: ComponentFixture<CardFrameworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFrameworksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFrameworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
