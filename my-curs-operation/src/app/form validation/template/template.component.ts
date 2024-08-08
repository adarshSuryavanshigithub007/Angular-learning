import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NaPipe } from '../../customPipe/pipes/na.pipe';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule,NaPipe,JsonPipe,CommonModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  formValue : any

  studentObj : any = {
      firstName:'',
      lastName:'',
      userName:'',
      city:'',
      state:'',
      zipCode:'',
      isAccepTerms:false,
  }

  cityArray: string [] = ['Pune','Mumbai','Nagpur','Thane'];

  onSubmit(){
    // debugger
    this.formValue = this.studentObj
    console.log(this.formValue)
  }

  onReset(){
    this.studentObj = {
      firstName:'',
      lastName:'',
      userName:'',
      city:'',
      state:'',
      zipCode:'',
      isAccepTerms:false,
    }
  }

}
