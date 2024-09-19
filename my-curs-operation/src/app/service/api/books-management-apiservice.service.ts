import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../config/API';
import { APIConstants } from '../../constant/api.constants';
import { UserApIEndPointConstants } from '../../constant/user-api-end-point.constants';


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
  // public URL: string = Constants.API_URL;
  public Token =  localStorage.getItem('token')
  constructor(private http: HttpClient) { }

  addNewBooks(data: any) {
    console.log(`${APIConstants.API_URL}/${UserApIEndPointConstants.BOOKMANAGEMENT_METHOD.CREATE_BOOK}`)
    return this.http.post<Response>(`${APIConstants.API_URL}/${UserApIEndPointConstants.BOOKMANAGEMENT_METHOD.CREATE_BOOK}`, data,{
      headers: {
        'Authorization': `Bearer ${this.Token}`
      }
    })
  }

  listOfBooks(){
    return this.http.get<Response>(`${APIConstants.API_URL}/${UserApIEndPointConstants.BOOKMANAGEMENT_METHOD.GET_ALL_BOOKS}`,{
      headers: {
        'Authorization': `Bearer ${this.Token}`
      }
    })
  }

  deleteBooks = (id:any)=>{
    return this.http.delete<Response>(`${APIConstants.API_URL}/${UserApIEndPointConstants.BOOKMANAGEMENT_METHOD.DELETE_BOOK}/`+id,{
      headers: {
        'Authorization': `Bearer ${this.Token}`
      }
    })
  }

  getDataById=(id:any)=>{
console.log(id)
    return this.http.get<Response>(`${APIConstants.API_URL}/${UserApIEndPointConstants.BOOKMANAGEMENT_METHOD.CREATE_BOOK}/`+id,{
      headers: {
        'Authorization': `Bearer ${this.Token}`
      }
    })
  }

  getSubmitUpdatedBook = (data: any, id: any) => {
    return this.http.put<Response>(`${APIConstants.API_URL}/books/${id}`, data, {
      headers: {
        'Authorization': `Bearer ${this.Token}`
      }
    });
  }

}
