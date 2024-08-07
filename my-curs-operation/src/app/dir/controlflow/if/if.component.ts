import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './if.component.html',
  styleUrl: './if.component.css'
})
export class IfComponent {

  div1Visible:boolean=false

  isWarningDivVisible :boolean=true

  num1 :string = ''

  num2 :string = ''

  isActive :boolean = true

  selectStatus:string = 'status'

  studentList: any[] = [
    {studId:12, name:'AAA', marks:30 , gender:'female', city: 'Pune',   isActive:  false},
    {studId:22, name:'BBB', marks:90 , gender:'male', city: 'Mumbai', isActive:  false},
    {studId:32, name:'CC', marks:60 , gender:'female', city: 'Jalgao', isActive:  true},
    {studId:56, name:'DD', marks:70 , gender:'male', city: 'Mumbai', isActive:  false},
    {studId:34, name:'EE', marks:89 , gender:'female', city: 'Nagpur', isActive:  false},
    {studId:76, name:'FFF', marks:100 , gender:'male', city: 'Thane', isActive:  true},
  ]
  showDiv(){
    this.div1Visible=true
  }
  hideDiv(){
    this.div1Visible = false
  }

  toggle(){
    this.isWarningDivVisible=!this.isWarningDivVisible
  }


}
