import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data } from '@angular/router';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  courseName: string = "Angular 18"

  inputType = "checkbox"

  rollNo : number = 123

  isIndian :boolean = true

  currentDate : Data = new Date()

  myClassName :string = "bg-primary"

  stateName : string = "selectstate"

  firstName = signal("adarsh s")

  constructor() {

  }

    changeCourseName(){
      this.courseName = "React.js"
      this.firstName.set("suryavanshi")
    }
  showAlert(message:string){
    alert(this.isIndian)
  }
}
