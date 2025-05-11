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
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModaldetailsComponent } from '../modaldetails/modaldetails.component';
@Component({
  selector: 'app-apidatatable',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    NgForOf,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './apidatatable.component.html',
  styleUrl: './apidatatable.component.sass',
  standalone: true,
})
export class ApidatatableComponent implements AfterViewInit {
  displayedColumns: string[] = []; // Sin columnas por ahora
  dataSource: MatTableDataSource<any> = new MatTableDataSource(); // Tabla vacía

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private jsonApiUrl = 'https://jsonplaceholder.typicode.com/posts';
  public titleApi!: string;
  constructor(
    private jsonplaceholderService: JsonplaceholderService,
    private dialog: MatDialog
  ) {
    this.titleApi = this.getApiNameFromUrl(this.jsonApiUrl);
  }

  ngOnInit(): void {
    // No se consume ningún API aún
    this.jsonplaceholderService
      .getApiData<Jsonplaceholderinterface[]>(this.jsonApiUrl)
      .subscribe((response: Jsonplaceholderinterface[]) => {
        this.displayedColumns = Object.keys(response[0]);
        this.dataSource.data = response;
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
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
  openModal(): void {
    const dialogRef = this.dialog.open(ModaldetailsComponent, {
      width: '400px',
      height: '500px',
      data: { mensaje: 'modal cerrado' },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  getApiNameFromUrl(url: string): string {
    const match = url.match(/https?:\/\/(?:www\.)?([^\.]+)/);
    return match ? match[1] : '';
  }
}
