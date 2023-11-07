import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = []; //El modelo
  public num: number=0;

  constructor() { 
    this.users.push({
      email: "admin@gmail.com",
      password: "admin",
    });
    this.users.push({
      email: "luis@gmail.com",
      password: "luisao",
    });
  }
//Controlador

 public authenticateUser(email: string, password: string): boolean {
  const user = this.users.find(u => u.email === email && u.password === password);
  return user !== undefined;
}
  public addUser(p:User): User[]{
    this.users.push(p);
    return this.users;
  }

  public removeUser(pos: number): User[] {
    this.users.splice(pos,1);//Posición y cantidad a eliminar
    return this.users;
  }

  public updateUser(pos: number, p: User):User[]{
    this.users[pos]=p;
    return this.users;
  }

  public getusers(): User[]{
    return this.users;
  }

  public getUser(pos:number): User{
    return this.users[pos];
  }
}
