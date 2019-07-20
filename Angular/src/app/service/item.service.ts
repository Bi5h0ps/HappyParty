import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from '../models/item'


@Injectable({
  providedIn: 'root'
})
export class ItemService{
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>; 

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection('Items'); // reference
    this.items = this.itemsCollection.valueChanges();
    console.log(this.items);
   }

  getItems() {
    return this.items;
  }
}
