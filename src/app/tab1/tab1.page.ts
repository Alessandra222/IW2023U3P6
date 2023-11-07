import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public products: Product[] = [];
  public productsFounds: Product[] = [];
  public filter = [
    "Abarrotes",
    "Frutas y Verduras",
    "Limpieza",
    "Farmacia",
  ];

  public colors = [
    {
      type: "Abarrotes",
      color: "primary"
    },
    {
      type: "Frutas y Verduras",
      color: "secondary"
    },
    {
      type: "Limpieza",
      color: "warning"
    },
    {
      type: "Farmacia",
      color: "danger"
    }
  ];

  constructor(private cartService: CartService, private router:Router, private productService: ProductService, private toastC: ToastController) {

    this.productsFounds = this.productService.getProducts();

  }

  public getColor(type: string): string {
    const itemFound = this.colors.find((element) => {
      return element.type === type;
    });
    let color = itemFound && itemFound.color ? itemFound.color : "";
    return color;
  }

  public filterProducts(): void {
    console.log(this.filter);
    this.productsFounds = this.products.filter(
      item => {
        return this.filter.includes(item.type);
      }
    );
  }

  public addToCart(product: Product, i: number) {
    product.photo = product.photo + i;
    this.cartService.addToCart(product);
    console.log(this.cartService.getCart());
  }

  public openAddProductPage(){
    this.router.navigate(['/add-product']);
  }

  public openUpdateProductPage(i:number){
    this.productService.num=i;
    console.log(this.productService.getProduct(i))
    this.router.navigate(['/update-product']);
  }
  public async removeProduct (pos: number){
    const toast = await this.toastC.create({
      header: 'Confirmación',
      message: '¿Quieres Eliminar este producto?',
      buttons: [
        {
          text: 'No',role: 'cancel',handler: () => {},
        },
        {
          text: 'Sí',
          handler: () => {
            this.productService.removeProduct(pos);
          },
        },
      ],
    });
  
    await toast.present();
    
  }


}
