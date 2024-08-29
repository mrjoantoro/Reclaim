import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Colección estática de productos
  private static products: Product[] = [
    {
      id: '1',
      title: 'Teléfono iPhone 12',
      description: 'Teléfono encontrado en el parque central.',
      imageUrl: 'https://example.com/image1.jpg',
      status: 'Encontrado',
      location: 'Parque Central',
      dateReported: new Date()
    },
    {
      id: '2',
      title: 'Mochila Negra',
      description: 'Mochila perdida en el metro línea 1.',
      imageUrl: 'https://example.com/image2.jpg',
      status: 'Reportado',
      location: 'Metro Línea 1',
      dateReported: new Date()
    }
  ];

  constructor() {}

  // Simula obtener productos desde Firebase
  getProducts(): Observable<Product[]> {
    return of(ProductService.products);
  }

  // Simula agregar un producto a la colección estática
  addProduct(product: Product): Promise<void> {
    product.id = (ProductService.products.length + 1).toString(); // Asigna un ID simple
    ProductService.products.push(product);
    return Promise.resolve(); // Simula el comportamiento de una promesa
  }

  // Simula obtener un producto por su ID
  getProductById(id: string): Observable<Product | undefined> {
    const product = ProductService.products.find(p => p.id === id);
    return of(product);
  }
}
