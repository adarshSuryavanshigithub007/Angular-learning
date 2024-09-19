import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Check if the user is logged in
  const checkToken = localStorage.getItem("token")
  console.log(checkToken)
  const router = inject(Router)
  if (checkToken) {
    // If the user is logged in, allow them to access the route
    return true;
  }else{
    // If the user is not logged in, redirect them to the login page
    router.navigateByUrl('login')
    return false
  }
};
