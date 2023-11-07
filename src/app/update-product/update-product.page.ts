import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.page.html',
  styleUrls: ['./update-product.page.scss'],
})
export class UpdateProductPage implements OnInit  {

  public productForm: FormGroup;
  public product: Product = {
    name: '',
    price: 0,
    type: '',
    photo: ''
  };
  
  constructor(private formBuilder: FormBuilder, private productService: ProductService, private toastC: ToastController, private router: Router) { 
    this.productForm = this.formBuilder.group({
      name:['', Validators.required],
      price:[0, Validators.required],
      description:['', Validators.required],
      type:['', Validators.required],
      photo:['', Validators.required],
    });
  }

 public async updateProduct(){
    const num = this.productService.num;
    const product = this.productForm.value;
    this.productService.updateProduct(num,product);
    
    const toast = await this.toastC.create({message: 'Prouducto Editaco correctamente uwu', duration:500,position:'middle'});
    toast.present();

    this.router.navigate(['/tabs/tab1']);


  }

  ngOnInit() {
    const num = this.productService.num;
    this.product = this.productService.getProduct(num); 

    this.productForm = this.formBuilder.group({
      name: [this.product.name],
      price: [this.product.price],
      description: [this.product.description],
      photo: [this.product.photo],
      type: [this.product.type],
    });
  }
  
  

}
