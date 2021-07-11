import { ModalMapComponent } from './../../components/modal-map/modal-map.component';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/models/product.model';

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

  constructor(private modalService: NgbModal) {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openModalMap() {
    const modalRef = this.modalService.open(ModalMapComponent, {
      centered: true,
    });
  }
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
