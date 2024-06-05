import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf, of, throwError } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  addBook(book: Book): Observable<Book>{

    // const error = new Error('Error while adding a book')
    // return throwError(()=> error)
    return of(book);
  }
}
