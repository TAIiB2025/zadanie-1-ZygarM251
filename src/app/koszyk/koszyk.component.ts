import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component
(
  {
  selector: 'app-koszyk',
  templateUrl: './koszyk.component.html',
  imports: [CommonModule],
  styleUrls: ['./koszyk.component.css']
}
)

export class KoszykComponent
 {
  @Input() wartoscKoszyka: number = 0;
}
