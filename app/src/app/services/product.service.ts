import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, of } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dbPath = 'products';

  constructor(private db : AngularFireDatabase) { }

  createLostProduct(product: Product): Promise<void> {
    const productData: Product = {
      ...product,
      status: 'Reportado',
      dateReported: new Date() // Aseguramos que la fecha la actual
    };

    const key = this.db.list(this.dbPath).push(productData).key;

    return this.db.object(`${this.dbPath}/${key}`).update({ id: key });
  }

  reportFoundProduct(productId : string, foundData: Partial<Product>): Promise<void> {
    const updateDate = {
      ...foundData,
      status: 'Encontrado'
    };

    return this.db.object(`${this.dbPath}/${productId}`).update(updateDate);
  };

  getProducts(): Observable<Product[]> {
    return this.db.list(this.dbPath).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => {
          const productData = c.payload.val() as Product;
          return {
            ...productData,
            id: c.payload.key ?? ''  // Aseguramos que `id` sea siempre un string, incluso si es `null`
          };
        })
      )
    );
  };

  getProductById(productId : string): Observable<Product | null> {
    return this.db.object(`${this.dbPath}/${productId}`).valueChanges() as Observable<Product | null>;
  };
}
