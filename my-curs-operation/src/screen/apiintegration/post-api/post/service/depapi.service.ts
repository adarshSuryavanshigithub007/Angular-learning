import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface DeleteResponse {
  message: string;
  result: boolean;
  data: null;
}
@Injectable({
  providedIn: 'root'
})
export class DepapiService {
    apiUrl:string = 'https://projectapi.gerasim.in/api/Complaint';

  constructor( private http:HttpClient) { }

  addNewUsers(data:any){
    return this.http.post(`${this.apiUrl}/AddNewDepartment`,data)
  }
  getAllUsers(){
    return this.http.get(`${this.apiUrl}/GetParentDepartment`)
  }
  getdeleteUser(id:any){
    return this.http.delete<DeleteResponse>(`${this.apiUrl}/DeletedepartmentBydepartmentId?departmentId=` + id)
  }
}
