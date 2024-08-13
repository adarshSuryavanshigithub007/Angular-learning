import { Routes } from '@angular/router';
import { AddnewbooksComponent } from '../screen/addnewbooks/addnewbooks.component';
import { DatabindingComponent } from './dir/databinding/databinding.component';
import { BooklistComponent } from '../screen/booklist/booklist.component';
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

export const routes: Routes = [
  {
    path :'add-Books',
    component:AddnewbooksComponent
  },
  {
    path: 'data-binding',
    component: DatabindingComponent
  },
  {
    path:'booklist',
    component:BooklistComponent
  },
  {
    path:'structural-dir',
    component:StructuraldirComponent
  },
  {
    path:'attribute-dir',
    component:AttributedirectiveComponent
  },
  {
    path:'if-else',
    component:IfComponent
  },
  {
    path:'loop',
    component:ForComponent
  },
  {
    path:'pipe',
    component:PipeComponent
  },
  {
    path:'template-form',
    component:TemplateComponent
  },
  {
    path:'reactiv-form',
    component:ReactiveComponent
  },
  {
    path:'get-api',
    component:GetApiComponent
  },
  {
    path:'Post-api',
    component:PostComponent
  }

];
