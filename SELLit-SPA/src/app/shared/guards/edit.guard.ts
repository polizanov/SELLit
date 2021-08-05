import { Injectable, OnDestroy } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { AuthorizationService } from "src/app/authorization/authorization.service";
import { PostService } from "src/app/posts/service/post.service";
import { ICreator } from "../../shared/interfaces/guards/ICreator";

@Injectable()
export class EditGuard implements CanActivate {
    userData: ICreator | null = null

    

    constructor (
        private router: Router,
        private authService: AuthorizationService,
        private activateRoute: ActivatedRoute,
        private postService: PostService,
        private authSevice: AuthorizationService,
    ) {}


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let id = state.url.split("/")[state.url.split("/").length - 1];
        this.postService.getCreator(id).subscribe(userData => this.userData = userData)
        if(this.authService.id == this.userData?.creator) { return true }
        
        return this.router.parseUrl(route.data.redirectUrl || "/")
    }

    


}