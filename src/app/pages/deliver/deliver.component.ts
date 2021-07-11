import { ModalMapComponent } from './../../components/modal-map/modal-map.component';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/models/product.model';
import { Constants } from 'src/app/utils/constants';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-deliver',
  templateUrl: './deliver.component.html',
  styleUrls: ['./deliver.component.scss'],
})
export class DeliverComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = Constants.displayedColumns;
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private modalService: NgbModal,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productService.productList$.subscribe((productList) => {
      console.log(productList);

      this.dataSource = new MatTableDataSource<Product>(productList.reverse());
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openModalMap() {
    const modalRef = this.modalService.open(ModalMapComponent, {
      centered: true,
    });
  }
}
