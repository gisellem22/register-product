import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-deliver',
  templateUrl: './deliver.component.html',
  styleUrls: ['./deliver.component.scss'],
})
export class DeliverComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'product',
    'date',
    'origin',
    'destiny',
    'route',
  ];
  dataSource = new MatTableDataSource<Product>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Product {
  product: string;
  date: string;
  origin: string;
  destiny: string;
  route: string;
}

const ELEMENT_DATA: Product[] = [
  {
    product: 'Auto',
    date: 'Hydrogen',
    origin: 'Catedral',
    destiny: 'H',
    route: 'any',
  },
  {
    product: 'Auto',
    date: 'Hydrogen',
    origin: 'Catedral',
    destiny: 'H',
    route: 'any',
  },
  {
    product: 'Auto',
    date: 'Hydrogen',
    origin: 'Catedral',
    destiny: 'H',
    route: 'any',
  },
  {
    product: 'Auto',
    date: 'Hydrogen',
    origin: 'Catedral',
    destiny: 'H',
    route: 'any',
  },
  {
    product: 'Auto',
    date: 'Hydrogen',
    origin: 'Catedral',
    destiny: 'H',
    route: 'any',
  },
  {
    product: 'Auto',
    date: 'Hydrogen',
    origin: 'Catedral',
    destiny: 'H',
    route: 'any',
  },
];
