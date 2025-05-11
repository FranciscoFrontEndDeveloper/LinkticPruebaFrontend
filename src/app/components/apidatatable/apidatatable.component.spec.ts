import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApidatatableComponent } from './apidatatable.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
describe('ApidatatableComponent', () => {
  let component: ApidatatableComponent;
  let fixture: ComponentFixture<ApidatatableComponent>;
  let mockService: jasmine.SpyObj<JsonplaceholderService>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  beforeEach(async () => {
    mockService = jasmine.createSpyObj('JsonplaceholderService', [
      'getApiData',
    ]);
    mockService.getApiData.and.returnValue(
      of([
        { userId: 1, id: 1, title: 'Post 1', body: 'Content 1' },
        { userId: 2, id: 2, title: 'Post 2', body: 'Content 2' },
      ])
    );
    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      imports: [ApidatatableComponent, HttpClientTestingModule],
      providers: [
        { provide: JsonplaceholderService, useValue: mockService },
        { provide: MatDialog, useValue: mockDialog },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ApidatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente se crea exitosamente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe configurar las columnas mostradas y la fuente de datos', () => {
    component.ngOnInit();
    expect(component.displayedColumns.length).toBeGreaterThan(0);
    expect(component.dataSource.data.length).toBeGreaterThan(0);
  });

});
