import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = "http://localhost:9080/book"; 

  constructor(private httpClient:HttpClient) { }

  createBook(book:Book):Observable<Object>{
    return this.httpClient.post(this.apiUrl, book, {responseType: "text"});
  }
}