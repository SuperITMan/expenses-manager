import {UserInfo} from "firebase";

export class Expense {
  id?: string;
  title: string;
  shop: string;
  location?: string;
  image?: string;
  price: string;
  owner?: UserInfo;
  ownerId: string;
}

