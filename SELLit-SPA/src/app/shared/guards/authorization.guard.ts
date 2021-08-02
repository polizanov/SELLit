import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthorizationService } from "src/app/authorization/authorization.service";


@Injectable()
export class AuthorizationGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthorizationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise < boolean | UrlTree > {
        if(route.data.isAuth == !!this.authService.token) { return true }

        return this.router.parseUrl(route.data.redirectUrl || "/")

    }
}
    

