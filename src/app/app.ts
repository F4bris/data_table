import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DataTable} from './users/presentation/table/data-table/data-table';

@Component({
  imports: [RouterOutlet, DataTable],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('data_table');
}
