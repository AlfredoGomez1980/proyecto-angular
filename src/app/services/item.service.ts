import { Injectable } from '@angular/core';
import {Item} from '../models/item'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
    {
      id: 0,
      title: 'Manzana',
      price: 10.5,
      quantity: 4,
      completed: false
    },
    {
      id: 1,
      title: 'Pera',
      price: 3.5,
      quantity: 8,
      completed: true
    },
    {
      id: 2,
      title: 'Melocotón',
      price: 305,
      quantity: 1,
      completed: false
    },
    {
      id: 3,
      title: 'Fresa',
      price: 7,
      quantity: 1,
      completed: false
    },
    {
      id: 4,
      title: 'Plátano',
      price: 88,
      quantity: 7,
      completed: false
    },
    {
      id: 5,
      title: 'Cereza',
      price: 47,
      quantity: 4,
      completed: false
    },
    {
      id: 6,
      title: 'Tomate',
      price: 2,
      quantity: 100,
      completed: false
    },
    {
      id: 7,
      title: 'Cebolla',
      price: 1.1,
      quantity: 17,
      completed: false
    },
    {
      id: 8,
      title: 'Lechuga',
      price: 5.6,
      quantity: 1,
      completed: false
    },
    {
      id: 9,
      title: 'Mandarina',
      price: 9,
      quantity: 1,
      completed: false
    }
  ];
  constructor() { }

  getItems() {    

    return this.items;
  }

  addItem(item: Item) {
    this.items.unshift(item);
  }
}