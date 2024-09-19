import { Routes } from '@angular/router';
import { AddnewbooksComponent } from '../screen/addnewbooks/addnewbooks.component';
import { DatabindingComponent } from './dir/databinding/databinding.component';
import { StructuraldirComponent } from './dir/structuraldir/structuraldir.component';
import { AttributedirectiveComponent } from './dir/attributedirective/attributedirective.component';
// import { ControlflowComponent } from './dir/controlflow/controlflow.component';
import { IfComponent } from './dir/controlflow/if/if.component';
import { ForComponent } from './dir/controlflow/for/for.component';
import { PipeComponent } from './pipe/pipe.component';
import { TemplateComponent } from './form validation/template/template.component';
import { ReactiveComponent } from './form validation/reactive/reactive.component';
import { GetApiComponent } from '../screen/apiintegration/get-api/get-api.component';
import { PostComponent } from '../screen/apiintegration/post-api/post/post.component';
import { LifeCycleEventComponent } from './lifeCycle/life-cycle-event/life-cycle-event.component';
import { NgTemplateComponent } from './template/ng-template/ng-template.component';
import { NgContainerComponent } from './template/ng-container/ng-container.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { LoginComponent } from '../screen/authentication/login/login.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { EditBooksComponent } from '../screen/edit-books/edit-books.component';
import { authGuard } from '../screen/authentication/authGuard/auth.guard';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:"full"
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:NavbarComponent,
    children:[
      {
        path :'add-Books',
        component:AddnewbooksComponent,
        canActivate:[authGuard]
      },
      {
        path :'edit/:id',
        component:EditBooksComponent,
        canActivate:[authGuard]
      },
      {
        path: 'data-binding',
        component: DatabindingComponent,
        canActivate:[authGuard]
      },
      {
        path:'structural-dir',
        component:StructuraldirComponent,
        canActivate:[authGuard]
      },
      {
        path:'attribute-dir',
        component:AttributedirectiveComponent,
        canActivate:[authGuard]
      },
      {
        path:'if-else',
        component:IfComponent,
        canActivate:[authGuard]
      },
      {
        path:'loop',
        component:ForComponent,
        canActivate:[authGuard]
      },
      {
        path:'pipe',
        component:PipeComponent,
        canActivate:[authGuard]
      },
      {
        path:'template-form',
        component:TemplateComponent,
        canActivate:[authGuard]
      },
      {
        path:'reactiv-form',
        component:ReactiveComponent,
        canActivate:[authGuard]
      },
      {
        path:'get-api',
        component:GetApiComponent,
        canActivate:[authGuard]
      },
      {
        path:'Post-api',
        component:PostComponent,
        canActivate:[authGuard]
      },
      {
        path:'lifecycle',
        component:LifeCycleEventComponent,
        canActivate:[authGuard]
      },
      {
        path:'ng-template',
        component:NgTemplateComponent,
        canActivate:[authGuard]
      },
      {
        path:'ng-containar',
        component:NgContainerComponent,
        canActivate:[authGuard]
      },
      {
        path:'viewChild',
        component:ViewChildComponent,
        canActivate:[authGuard]
      }
    ]
  }


];
