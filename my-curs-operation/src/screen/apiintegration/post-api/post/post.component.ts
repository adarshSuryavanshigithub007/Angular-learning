import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepapiService } from './service/depapi.service';
import { AlertComponent } from '../../../../app/components/alert/alert.component';
import { ButtonComponent } from '../../../../app/components/button/button.component';
interface DeleteResponse {
  message: string;
  result: boolean;
  data: null;
}
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, FormsModule,AlertComponent,ButtonComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  departmentList: any[] = []
  newCustomer: any[] = []

  department: any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  }

  constructor(private http: HttpClient , private depService : DepapiService) {
    this.getAllDepartment()
    console.time('Constructor');
    console.log("construc");
    console.timeLog('Constructor'); // This logs the current elapsed time without stopping the timer
    console.timeEnd('Constructor');
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    console.time('ngOnIt');
    console.log("ngonit")
    console.timeLog('ngonit'); // This logs the current elapsed time without stopping the timer
    console.timeEnd('ngonit');
  }

  save() {
    try {
      this.depService.addNewUsers(this.department).subscribe((response:any)=>{
        console.log(response)
        if (response.result) {
          alert("Department Added Successfully");
          this.getAllDepartment()
          this.department = response.data

        }else{
          alert("Department Not Added")
        }
      },error=>{
        console.log(error);
      })

    } catch (error) {
      console.log(error)
    }

    console.log(this.department)
  }

  getAllDepartment(){
    this.depService.getAllUsers().subscribe((result:any)=>{
      this.newCustomer=result.data
      console.log(this.newCustomer)
    },error=>{
      console.log(error)
    })
  }
  getEdit(data:any) {
    console.log(data)
    this.department = data
  }
  update(){

  }

  getDelete(id: any) {
    console.log("delete", id)
    this.depService.getdeleteUser(id).subscribe((response) => {
      console.log(response['message'])
      if(response['result']){
        alert("Department Deleted Successfully");
        this.getAllDepartment()
      }
    }, error => {
      console.log(error)
    })
  }

  getData(data:any){
console.log(data)
  }

}
