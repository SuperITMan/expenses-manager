import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {AddExpensePage} from "../add-expense/add-expense";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AddExpensePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
