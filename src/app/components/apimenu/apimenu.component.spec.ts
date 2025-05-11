import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ApimenuComponent } from './apimenu.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('ApimenuComponent', () => {
  let component: ApimenuComponent;
  let fixture: ComponentFixture<ApimenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApimenuComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            snapshot: {
              paramMap: {
                get: () => null,
              },
            },
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ApimenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente se crea exitosamente', () => {
    expect(component).toBeTruthy();
  });
});
