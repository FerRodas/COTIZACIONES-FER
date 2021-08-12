import { Injectable } from '@angular/core';
import { Item } from '../components/Models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
items:Item[] = [{
  titular: 'Cliente',
  peso: 20,
  ancho: 20,
  alto: 30,
  largo: 40,
  pais: 'Guatemala',
  region: 'Centro America'
},
{
  titular: 'Edgar',
  peso: 100,
  ancho: 20,
  alto: 60,
  largo: 40,
  pais: 'Guatemala',
  region: 'Centro America'
}
];
  constructor() { }

  getItems(){
    return this.items;
  }

  addItem(item:Item){
    this.items.unshift(item);
  }
}
