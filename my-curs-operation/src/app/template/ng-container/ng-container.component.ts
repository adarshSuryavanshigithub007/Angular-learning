import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DepartmentService } from '../../../screen/apiintegration/get-api/service/department.service';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [CommonModule, NgxSpinnerModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent {

  isNgContainerVisible :boolean = true
  userList:any=[]
  constructor(private service:DepartmentService,private spinner: NgxSpinnerService){

  }
  getAllUser() {
    try {
      this.spinner.show()
      this.service.getUsers().subscribe((result: any) => {
        console.log(result)
        this.userList = result
        this.spinner.hide()
      }, error => {
        console.log(error)

      })
    } catch (error) {
      console.log(error)
    }

  }


}
