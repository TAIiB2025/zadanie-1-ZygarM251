import { Component } from '@angular/core';
import { Product } from './model/product.model';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { KoszykComponent } from './koszyk/koszyk.component';

@Component
(
  {
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, ProductComponent, KoszykComponent],
  styleUrls: ['./app.component.css']
}
)

export class AppComponent 
{
  produkty: (Product & { iloscWSkoszyku: number })[] = [
    { nazwa: 'Piłka', cena: 10.00, dataUtworzenia: new Date('2011-03-10'), czyPromocja: false, iloscWSkoszyku: 0 },
    { nazwa: 'Nóż', cena: 30.50, dataUtworzenia: new Date('2023-02-15'), czyPromocja: true, iloscWSkoszyku: 0 },
    { nazwa: 'Buty', cena: 15.99, dataUtworzenia: new Date('2024-06-11'), czyPromocja: false, iloscWSkoszyku: 0 },
    { nazwa: 'Zegarek', cena: 45.00, dataUtworzenia: new Date('2002-12-25'), czyPromocja: true, iloscWSkoszyku: 0 },
    { nazwa: 'Samochodzik', cena: 80.00, dataUtworzenia: new Date('2020-02-01'), czyPromocja: false, iloscWSkoszyku: 0 },
  ];

  wartoscKoszyka: number = 0;
  pokazProdukty: boolean = true;

  dodajDoKoszyka(produkt: any) 
  {
    produkt.iloscWSkoszyku++;
    this.wartoscKoszyka += produkt.cena;
  }

  toggleProdukty()
   {
    this.pokazProdukty = !this.pokazProdukty;
  }

  wyczyscKoszyk() {
    this.wartoscKoszyka = 0;
    this.produkty.forEach(produkt => produkt.iloscWSkoszyku = 0);
  }
  
}
