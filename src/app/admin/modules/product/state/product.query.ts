import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ProductStore, ProductState } from './product.store';

@Injectable({ providedIn: 'root' })
export class ProductQuery extends QueryEntity<ProductState> {

  productPaging$ = this.select(x => x.productPaging);
  constructor(protected store: ProductStore) {
    super(store);
  }
}
