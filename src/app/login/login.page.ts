import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastC: ToastController, private router: Router, private userService: UserService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public async tabs(){
    const answer = this.userService.authenticateUser(this.loginForm.value.email, this.loginForm.value.password);
    if(!answer){
      this.incorrect();
    }else{
      this.correct();
      this.router.navigate(['tabs/tab1']);
    }
  }
  public async correct(){
    const toast = await this.toastC.create({message: 'Inicio de sesión correctamente uwu', duration:500,position:'middle'});
    toast.present();
    this.router.navigate(['tabs/tab1']);
  }

    

  public async incorrect(){
    const toast = await this.toastC.create({message: 'Esta cuenta no existe', duration:500,position:'middle'});
    toast.present();
  }

}
