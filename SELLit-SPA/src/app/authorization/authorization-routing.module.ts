import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from '../shared/guards/authorization.guard';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
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
            redirectUrl: "/all-products"
        }
    },
    {
        path: "register",
        component: RegisterComponent,
        canActivate: [AuthorizationGuard],
        data: {
            isAuth: false,
            redirectUrl: "/all-products"
        }
    },
    {
        path: "my-profile",
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
        path: "user-profile",
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
    },
    {
        path: "edit-profile",
        component: EditProfileComponent,
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