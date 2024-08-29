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
      title: 'Zapatillas',
      description: 'Zapillas blancas terrible pulentas',
      imageUrl: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/126979469_01/w=1500,h=1500,fit=pad',
      status: 'Encontrado',
      location: 'En el baño',
      dateReported: new Date()
    },
    {
      id: '2',
      title: 'iPhone 14',
      description: 'iPhone 14 negro black wazap',
      imageUrl: 'https://d1aqw5mz0wngqe.cloudfront.net/images/spree/images/2123123/attachments/large/Apple_iPhone_14_Midnight_1A.jpg?1678205819',
      status: 'Encontrado',
      location: 'Laboratorio LPC11',
      dateReported: new Date()
    },
    {
      id: '3',
      title: 'Product 3',
      description: 'Description 3',
      imageUrl: 'https://picsum.photos/200/300',
      status: 'Validado',
      location: 'Calle 3',
      dateReported: new Date()
    },
    {
      id: '4',
      title: 'Product 4',
      description: 'Description 4',
      imageUrl: 'https://picsum.photos/200/300',
      status: 'Entregado',
      location: 'Calle 4',
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
