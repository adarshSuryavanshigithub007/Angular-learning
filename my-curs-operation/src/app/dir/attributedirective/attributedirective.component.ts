import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attributedirective',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './attributedirective.component.html',
  styleUrl: './attributedirective.component.css'
})
export class AttributedirectiveComponent {

  div1BgColor : string ='bg-primary'
  isDiv2Active : boolean = false
  num1 :string = ''
  num2 :string = ''
  isActive:boolean=true

  studentList: any[] = [
    {studId:12, name:'AAA', marks:30 , gender:'female', city: 'Pune',   isActive:  false},
    {studId:22, name:'BBB', marks:90 , gender:'male', city: 'Mumbai', isActive:  false},
    {studId:32, name:'CC', marks:60 , gender:'female', city: 'Jalgao', isActive:  true},
    {studId:56, name:'DD', marks:70 , gender:'male', city: 'Mumbai', isActive:  false},
    {studId:34, name:'EE', marks:89 , gender:'female', city: 'Nagpur', isActive:  false},
    {studId:76, name:'FFF', marks:100 , gender:'male', city: 'Thane', isActive:  true},
  ]
  addRed(){
    this.div1BgColor = "bg-danger"
  }

  addBlue(){
    this.div1BgColor = "bg-primary"
  }
  toogleDiv2(){
    this.isDiv2Active = !this.isDiv2Active
  }

}
