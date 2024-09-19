import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NaPipe } from '../../customPipe/pipes/na.pipe';
import { CommonModule, JsonPipe } from '@angular/common';
import { MessageConstants } from '../../constant/message.constants';

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

  validationMessage : any = MessageConstants.VALIDATION_MESSAGE
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.validationMessage)
  }
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
