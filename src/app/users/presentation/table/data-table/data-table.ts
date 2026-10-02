import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserStore } from '../../../application/user.store';
import { User } from '../../../domain/model/user.entity';

@Component({
  imports: [MatTableModule, MatPaginatorModule],
  selector: 'app-data-table',
  styleUrl: './data-table.css',
  templateUrl: './data-table.html',
})
export class DataTable implements OnInit, AfterViewInit {
  private store = inject(UserStore);

  displayedColumns: string[] = [
    'id', 'name', 'username', 'email', 'phone', 'website', 'company', 'address',
  ];
  dataSource = new MatTableDataSource<User>([]);
  loading = false;
  error: string | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.store.loadUsers().subscribe({
      next: (users) => {
        this.dataSource.data = users;
        this.loading = false;
      },
      error: () => {
        this.error = 'No se pudieron cargar los usuarios';
        this.loading = false;
      },
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
