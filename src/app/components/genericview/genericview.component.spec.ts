import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { GenericviewComponent } from './genericview.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('GenericviewComponent', () => {
  let component: GenericviewComponent;
  let fixture: ComponentFixture<GenericviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericviewComponent],
            providers: [
      {
        provide: ActivatedRoute,
        useValue: {
          params: of({}), 
          snapshot: {
            paramMap: {
              get: () => null
            }
          }
        }
      }
    ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente se crea exitosamente', () => {
    expect(component).toBeTruthy();
  });
});
