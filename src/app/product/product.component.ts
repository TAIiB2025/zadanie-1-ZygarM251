import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product.model';
import { CommonModule } from '@angular/common';

@Component
(
  {
  selector: 'app-product',
  templateUrl: './product.component.html',
  imports: [CommonModule],
  styleUrls: ['./product.component.css']
}
)

export class ProductComponent 
{
  @Input() produkt!: Product & { iloscWSkoszyku: number };

  pokazSzczegoly: boolean = true;
  @Output() dodaj = new EventEmitter<any>();

  dodajDoKoszyka()
  {
    this.dodaj.emit(this.produkt);
  }

  toggleSzczegoly() {
    this.pokazSzczegoly = !this.pokazSzczegoly;
  }

}
