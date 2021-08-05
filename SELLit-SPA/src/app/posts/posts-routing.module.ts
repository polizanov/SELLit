import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
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
    },
    {
        path: "edit",
        children: [{
            path: ":productId",
            component: EditComponent
        }],
    }, 
    {
        path: "delete", 
        children: [{
            path: ":productId",
            component: DeleteComponent
        }],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }