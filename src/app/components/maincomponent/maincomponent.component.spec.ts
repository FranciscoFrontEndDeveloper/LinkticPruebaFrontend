import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincomponentComponent } from './maincomponent.component';

describe('MaincomponentComponent', () => {
  let component: MaincomponentComponent;
  let fixture: ComponentFixture<MaincomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaincomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaincomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
