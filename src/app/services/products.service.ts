import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = 'https://run.mocky.io/v3/677d62eb-36d9-4dc4-8679-9d43f1553bd6';

  constructor(private http: HttpClient) {}

  save(product: Product): Observable<Product> {
    console.log(product);
    return this.http.post<Product>(this.url, product);
  }
}
