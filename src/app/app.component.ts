import { Component } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
constructor(private bookservice:BookService){}

  book:Book = new Book();

  msg:any = "";

  onInsertClick(){
      this.bookservice.createBook(this.book).subscribe(data =>{
        this.msg = data;
      })
  }

}