import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { Constants } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = 'https://run.mocky.io/v3/677d62eb-36d9-4dc4-8679-9d43f1553bd6';

  productList: Product[] = [];

  private emitProductList = new BehaviorSubject<Product[]>([]);
  public productList$ = this.emitProductList.asObservable();

  constructor(private http: HttpClient) {}

  save(product: Product): Observable<Product> {
    product.route = '';
    console.log(product);
    this.productList.push(product);
    this.emitProductList.next(this.productList);
    return this.http.post<Product>(this.url, product);
  }
}
