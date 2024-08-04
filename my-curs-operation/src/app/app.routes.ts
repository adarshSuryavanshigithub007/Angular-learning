import { Routes } from '@angular/router';
import { AddnewbooksComponent } from '../screen/addnewbooks/addnewbooks.component';
import { DatabindingComponent } from './dir/databinding/databinding.component';
import { BooklistComponent } from '../screen/booklist/booklist.component';
import { StructuraldirComponent } from './dir/structuraldir/structuraldir.component';
import { AttributedirectiveComponent } from './dir/attributedirective/attributedirective.component';

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

];
