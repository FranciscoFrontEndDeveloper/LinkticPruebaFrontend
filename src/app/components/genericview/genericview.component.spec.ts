import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericviewComponent } from './genericview.component';

describe('GenericviewComponent', () => {
  let component: GenericviewComponent;
  let fixture: ComponentFixture<GenericviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
