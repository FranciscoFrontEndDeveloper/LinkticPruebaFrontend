import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApifilterComponent } from './apifilter.component';

describe('ApifilterComponent', () => {
  let component: ApifilterComponent;
  let fixture: ComponentFixture<ApifilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApifilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApifilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
