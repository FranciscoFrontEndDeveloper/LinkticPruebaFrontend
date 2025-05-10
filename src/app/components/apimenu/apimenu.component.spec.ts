import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApimenuComponent } from './apimenu.component';

describe('ApimenuComponent', () => {
  let component: ApimenuComponent;
  let fixture: ComponentFixture<ApimenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApimenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApimenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
