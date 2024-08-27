import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../config/API';
interface Response {
  message: string;
  success:boolean
  data: null;
}
@Injectable({
  providedIn: 'root'
})
export class BooksManagementApiserviceService {
  public URL: string = Constants.API_URL;
  public Token =  localStorage.getItem('token')
  constructor(private http: HttpClient) { }

  addNewBooks(data: any) {
    console.log(`${this.URL}/new-books`)
    return this.http.post<Response>(`${this.URL}/new-books`, data,{
      headers: {
        'Authorization': `Bearer ${this.Token}`
      }
    })
  }

  listOfBooks(){
    return this.http.get<Response>(`${this.URL}/books`,{
      headers: {
        'Authorization': `Bearer ${this.Token}`
      }
    })
  }
}
