import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldetailsComponent } from './modaldetails.component';

describe('ModaldetailsComponent', () => {
  let component: ModaldetailsComponent;
  let fixture: ComponentFixture<ModaldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModaldetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente se crea exitosamente', () => {
    expect(component).toBeTruthy();
  });
});
