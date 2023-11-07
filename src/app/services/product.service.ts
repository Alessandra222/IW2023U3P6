import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = []; //El modelo
  public num: number=0;

  constructor() { 
    this.products.push({
      name: "Aguacate",
      price: 100,
      description: "Lorem ipsum dolor sit amet.",
      type: "Frutas y Verduras",
      photo: "https://picsum.photos/700/300?random",
    });
    this.products.push({
      name: "Coca Cola",
      price: 20,
      description: "Lorem ipsum dolor sit amet.",
      type: "Abarrotes",
      photo: "https://picsum.photos/700/300?random"
    });
    this.products.push({
      name: "Jabón Zote",
      price: 40,
      description: "Lorem ipsum dolor sit amet.",
      type: "Limpieza",
      photo: "https://picsum.photos/700/300?random"
    });
    this.products.push({
      name: "Aspirina",
      price: 50,
      description: "Lorem ipsum dolor sit amet.",
      type: "Farmacia",
      photo: "https://picsum.photos/700/300?random"
    });
  }
//Controlador
  public addProduct(p:Product): Product[]{
    this.products.push(p);
    return this.products;
  }

  public removeProduct(pos: number): Product[] {
    this.products.splice(pos,1);//Posición y cantidad a eliminar
    return this.products;
  }

  public updateProduct(pos: number, p: Product):Product[]{
    this.products[pos]=p;
    return this.products;
  }

  public getProducts(): Product[]{
    return this.products;
  }

  public getProduct(pos:number): Product{
    return this.products[pos];
  }
}
