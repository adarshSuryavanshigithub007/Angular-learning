import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  constructor(private http: HttpClient) {
console.log("construc")

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllDepartment()
    console.log("ngonit")
  }

  save() {
    try {
      this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.department).subscribe((response: any) => {
        console.log(response.data);
        if (response.result) {
          alert("Department Added Successfully");
          this.getAllDepartment()
          this.department = response.data

        }else{
          alert("Department Not Added")
        }
      }, error => {
        console.log(error);
      })
    } catch (error) {
      console.log(error)
    }

    console.log(this.department)
  }

  getAllDepartment(){
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((result:any)=>{
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

}
