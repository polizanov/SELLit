import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from '../shared/guards/authorization.guard';
import { LoginComponent } from './login/login.component';
import { MyFavouriteComponent } from './my-favourite/my-favourite.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: "login",
        component: LoginComponent,
        canActivate: [AuthorizationGuard],
        data: {
            isAuth: false,
            redirectUrl: "/"
        }
    },
    {
        path: "register",
        component: RegisterComponent,
        canActivate: [AuthorizationGuard],
        data: {
            isAuth: false,
            redirectUrl: "/"
        }
    },
    {
        path: "profile",
        children: [{
            path: ":profileId",
            component: ProfileComponent
        }],
        canActivate:[AuthorizationGuard],
        data: {
            isAuth: true,
            redirectUrl: "/login"
        }
    },
    {
        path: "my-favourite",
        component: MyFavouriteComponent,
        canActivate:[AuthorizationGuard],
        data: {
            isAuth: true,
            redirectUrl: "/login"
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }