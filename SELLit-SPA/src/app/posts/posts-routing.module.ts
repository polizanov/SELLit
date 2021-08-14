import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from '../shared/guards/authorization.guard';
import { AllComponent } from './all/all.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
    {
        path: "all-products",
        component: AllComponent
    },
    {
        path: "details",
        children: [{
            path: ":productId",
            component: DetailsComponent
        }]
    },
    {
        path: "create",
        component: CreateComponent,
        canActivate: [AuthorizationGuard],
        data: {
            isAuth: true,
            rediretUrl: "/"
        }
    },
    {
        path: "edit",
        children: [{
            path: ":productId",
            component: EditComponent
        }],
        canActivate: [AuthorizationGuard],
        data: {
            isAuth: true,
            rediretUrl: "/"
        }
    }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { 
    
}