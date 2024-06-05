import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf, of, throwError } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  addBook(book: Book): Observable<Book>{
    return of(book);
  }
}