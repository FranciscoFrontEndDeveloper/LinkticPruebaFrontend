import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service';
import { Jsonplaceholderinterface } from '../../jsonplaceholderinterface';
import { MatCardModule } from '@angular/material/card';
import { NgForOf } from '@angular/common';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

@Component({
  selector: 'app-apidatatable',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    NgForOf
  ],
  templateUrl: './apidatatable.component.html',
  styleUrl: './apidatatable.component.sass',
  standalone: true
})
export class ApidatatableComponent implements AfterViewInit {
  displayedColumns: string[] = []; // Sin columnas por ahora
  dataSource: MatTableDataSource<any> = new MatTableDataSource(); // Tabla vacía

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private jsonApiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private jsonplaceholderService: JsonplaceholderService) {}

  ngOnInit(): void {
    // No se consume ningún API aún
        this.jsonplaceholderService.getApiData<Jsonplaceholderinterface[]>(this.jsonApiUrl)
      .subscribe((response: Jsonplaceholderinterface[]) => {
        console.group('Datos de la API');
        console.log(response);
        console.groupEnd();

        // Asignar las columnas dinámicamente
        this.displayedColumns = Object.keys(response[0]);

        // Asignar los datos a la tabla
        this.dataSource.data = response;
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}