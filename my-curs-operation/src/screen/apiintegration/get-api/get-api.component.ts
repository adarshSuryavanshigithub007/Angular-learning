import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  constructor(private http: HttpClient) {
    this.getAllUser()
    this.getAllCustomer()
  }
  userList: any[] = []
  pageSize : number = 5
  currentPage:number=1
  paginatedUserList = []
  customerList : any[] =[]


  getAllUser() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result: any) => {
      this.userList = result
      console.log(this.userList)
    },error=>{
      console.log(error)
    })
  }

  getAllCustomer(){
    this.http.get("https://projectapi.gerasim.in/api/PropertyBookingController/GetAllCustomer").subscribe((result:any)=>{
      this.customerList=result.data
      console.log(this.customerList)
    },error=>{
      console.log(error)
    })
  }


}
