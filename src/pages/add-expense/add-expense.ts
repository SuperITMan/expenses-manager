import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ExpenseProvider} from "../../providers/expense/expense";
import {Expense} from "../../models/expense";
import {AngularFireAuth} from "angularfire2/auth";
import {User} from "firebase";

/**
 * Generated class for the AddExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-expense',
  templateUrl: 'add-expense.html',
})
export class AddExpensePage {

  private expense: Expense = {
    image: '',
    location: '',
    ownerId: '',
    price: '',
    shop: '',
    title: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private expenseSvc: ExpenseProvider,
              private auth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddExpensePage');

    this.auth.user.subscribe((user: User) => {
      this.expense.ownerId = user.uid;
    })
  }

  addExpense() {
    this.expenseSvc.add(this.expense).subscribe(() => console.log("yeahh !!"));
  }
}
