import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../config/API';

interface Book {
  title: string;
  author: string;
  price: number;
  description: string;
  publishYear: number;
  _id: string; // assuming you have an _id field for identifying books
}

interface Response {
  message: string;
  success:boolean
  data: Book | null;
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

  deleteBooks = (id:any)=>{
    return this.http.delete<Response>(`${this.URL}/books/`+id,{
      headers: {
        'Authorization': `Bearer ${this.Token}`
      }
    })
  }

  getDataById=(id:any)=>{
console.log(id)
    return this.http.get<Response>(`${this.URL}/books/`+id,{
      headers: {
        'Authorization': `Bearer ${this.Token}`
      }
    })
  }

  getSubmitUpdatedBook = (data: any, id: any) => {
    return this.http.put<Response>(`${this.URL}/books/${id}`, data, {
      headers: {
        'Authorization': `Bearer ${this.Token}`
      }
    });
  }

}
