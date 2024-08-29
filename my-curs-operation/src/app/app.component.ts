import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { AddnewbooksComponent } from '../screen/addnewbooks/addnewbooks.component';
// import { BooklistComponent } from '../screen/booklist/booklist.component';
import { LoginComponent } from '../screen/authentication/login/login.component';
import { DatabindingComponent } from './dir/databinding/databinding.component';
import { StructuraldirComponent } from './dir/structuraldir/structuraldir.component';
import { AttributedirectiveComponent } from './dir/attributedirective/attributedirective.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-curs-operation';
}
