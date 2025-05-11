import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApidatatableComponent } from './apidatatable.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApidatatableComponent', () => {
  let component: ApidatatableComponent;
  let fixture: ComponentFixture<ApidatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApidatatableComponent,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApidatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente se crea exitosamente', () => {
    expect(component).toBeTruthy();
  });
});
