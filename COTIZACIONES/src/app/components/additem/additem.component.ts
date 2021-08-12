import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Item } from '../Models/item';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {


  titular: string = '';
  peso: number =0;
  ancho: number =0;
  alto: number=0;
  largo: number=0;
  pais: string= '';
  region: string= '';
  constructor(private itemService: ItemService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const item = new Item();
    item.titular = this.titular;
    item.peso = this.peso;
    item.ancho = this.ancho;
    item.alto = this.alto;
    item.largo = this.largo;
    item.pais = this.pais;
    item.region = this.region

    this.itemService.addItem(item);
    this.router.navigate(['/']);
  }

}
