import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authenticatedUserGuard = () => {

    // Alas! There is no method dependency-injection; so inject manually.     
    const router = inject(Router);
    const authenticationService = inject(AuthenticationService);
    
    return authenticationService.hasLoggedIn() ? true : router.navigate(['/auth/login']);
}

// Old-style; forget 
// @Injectable({
//     providedIn: 'root'
// })
// export class AuthenticationGuard implements CanActivate {
//     constructor(
//         private router: Router,
//         private accountService: AuthenticationService,
        
//     ) {}

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         const user = this.accountService.isUserLoggedIn;

//         if (user) {
//             // authorised so return true
//             return true;
//         }

//         // not logged in so redirect to login page with the return url
//         this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
//         return false;
//     }
// }
