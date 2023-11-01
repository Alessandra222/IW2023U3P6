import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage {

  public productForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private productService: ProductService, private toastC: ToastController, private router: Router) { 
    this.productForm = this.formBuilder.group({
      name:['', Validators.required],
      price:[0, Validators.required],
      description:['', Validators.required],
      type:['', Validators.required],
      photo:['', Validators.required],
    });
  }

 public async addProduct(){
    const product = this.productForm.value;
    this.productService.addProduct(product);
    
    const toast = await this.toastC.create({message: 'Proudcto agregado uwu', duration:500,position:'middle'});
    toast.present();

    this.router.navigate(['/tabs/tab1']);


  }

  
  

}
