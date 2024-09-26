import { CanActivateFn, Router} from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Verificamos si el usuario esta autenticado
  if (authService.isLoggedIn()) {
    return true; // Permite el acceso
  } else {
    // Redirige a la página de login si no está autenticado
    router.navigate(['login']);
    return false; // No permite el acceso
  }
};
