import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DepartmentService } from './service/department.service';
import { AlertComponent } from '../../../app/components/alert/alert.component';
import { ButtonComponent } from '../../../app/components/button/button.component';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [CommonModule,AlertComponent,ButtonComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  constructor(private http: HttpClient, private service: DepartmentService) {
    this.getAllUser()
    this.getAllCustomer()
  }
  userList: any[] = []
  pageSize: number = 5
  currentPage: number = 1
  paginatedUserList = []
  customerList: any[] = []
  message : string = 'hello adarsh'


  getAllUser() {
    try {
      this.service.getUsers().subscribe((result: any) => {
        console.log(result)
        this.userList = result
      }, error => {
        console.log(error)
      })
    } catch (error) {
      console.log(error)
    }

  }

  getAllCustomer() {
    this.service.getCustomer().subscribe((result: any) => {
      this.customerList = result.data
      console.log(this.customerList)
    }, error => {
      console.log(error)
    })
  }

  getChange(){
    this.message
  }


}
