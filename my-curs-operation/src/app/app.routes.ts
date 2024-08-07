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
  }

];
