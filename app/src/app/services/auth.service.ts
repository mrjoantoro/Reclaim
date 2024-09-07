import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.mode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: { email: string, password: string }[] = [];
  private currentUser: { email: string } | null = null;

  constructor() { }

  register(email: string, password: string): boolean {
    // Verificar si el usuario existe
    const userExists = this.users.some(user => user.email === email);
    if(userExists) {
      return false; //Usuario ya existe
    }

    // Agrega un nuevo usuario
    this.users.push({ email, password });
    return true;
  }

  login(email: string, password: string): boolean {
    //Busca el usuario en la lista
    const user = this.users.find(user => user.email === email && user.password === password);
    if(user){
      this.currentUser = user;
      return true;
    }

    return false;
  }

  logout(): void {
    this.currentUser = null; // Cierre la sesión
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null; // Verifica si hay un usuario logeado
  }

  getCurrentUser(): { email: string } | null {
    return this.currentUser;
  }

}
