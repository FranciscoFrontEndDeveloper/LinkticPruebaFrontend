import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MaincomponentComponent } from './maincomponent.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('MaincomponentComponent', () => {
  let component: MaincomponentComponent;
  let fixture: ComponentFixture<MaincomponentComponent>;

  TestBed.configureTestingModule({
  imports: [ MaincomponentComponent ],

})

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaincomponentComponent],
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
    }).compileComponents();

    fixture = TestBed.createComponent(MaincomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente se crea', () => {
    expect(component).toBeTruthy();
  });

  it('Se debe mostrar el titulo', () => {
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.querySelector('h1')?.textContent).toContain('master of apis');
  });
  
  it('La ruta al siguiente componente con routerLink a "/apimenu"', () => {
  const compiled = fixture.nativeElement as HTMLElement;
  const button = compiled.querySelector('button[routerLink="/apimenu"]');
  expect(button).toBeTruthy();
  });
  
  it('Debe mostrar el texto "start" y el ícono "login" en el botón', () => {
  const compiled = fixture.nativeElement as HTMLElement;
  const button = compiled.querySelector('button[routerLink="/apimenu"]');
  const icon = button?.querySelector('mat-icon');

  expect(button?.textContent?.toLowerCase()).toContain('start');
  expect(icon?.textContent?.trim()).toBe('login');
});
});
