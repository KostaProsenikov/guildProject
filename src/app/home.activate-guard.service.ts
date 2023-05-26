import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class HomeActivateGuardService implements CanActivate{

//   constructor() {}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
//     return true 
//   }
// }

export namespace HomeActivateGuardService {

  export const canActivate = () => {
    return true
  }
 
}
