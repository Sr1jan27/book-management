import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as bookActions from "./book.actions";
import { BookService } from "./book.service";
import { mergeMap, map, catchError, of } from "rxjs";

@Injectable()
export class BookEffects {

    //this is a ngrx effect that responds to 'AddBook' actions.
    addBook$ = createEffect(() => this.actions$.pipe(
        //listen for action of type 'AddBook'
        ofType(bookActions.AddBook),

        //Foor each 'AddBook' actions call 'addBook' on the book service
        // 'mergeMap' allows multiple concurrent 'addBook' calls.
        mergeMap((action) => this.bookService.addBook(action)
            .pipe(

                // if the addBook call is success, dispatch 'AddBookSuccess' action with the book data.
                map(book => bookActions.AddBookSuccess(book)),
                // If the addBook call is failure, dispatch 'AddBookFailure' actions with the error.
                catchError((error) => of(bookActions.AddBookFailure({error})))
            ))
    ));

    constructor(private actions$: Actions,
        private bookService: BookService
    ){}

}