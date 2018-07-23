import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Expense} from "../../models/expense";
import {Observable} from "rxjs";
import {from} from "rxjs/internal/observable/from";
import {map} from "rxjs/operators";

/*
  Generated class for the ExpenseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExpenseProvider {

  private expensesCollection: AngularFirestoreCollection<Expense>;

  constructor(private afs: AngularFirestore) {
    console.log('Hello ExpenseProvider Provider');
    this.expensesCollection = this.afs.collection("expenses");
  }

  add(expense: Expense): Observable<void> {
    expense.id = this.afs.createId();
    console.log("expense: ", expense);
    return from(this.expensesCollection.doc(expense.id).set(expense));
  }

}
