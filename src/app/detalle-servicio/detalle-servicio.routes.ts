import { Route, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { NgModule } from "@angular/core";

const routes: Route[] = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'index',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetalleServicioRouterModule { }