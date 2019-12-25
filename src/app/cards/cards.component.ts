import { Component, OnInit } from '@angular/core';

import { Card } from '../card';
import { CardService } from '../Card.service';
import { MessageService } from '../messages.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: Card[];
  total: number;
  current = 1;
  pageSize = 20;
  constructor(
    private cardService: CardService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getCardsTotal();
    this.getCards(this.current, this.pageSize);
  }

  getCardsTotal(): void {
    this.cardService.getCardsTotal().subscribe(total => this.total = total);
  }

  getCards(page, pageSize): void {
    this.cardService.getCards(page, pageSize).subscribe(cards => this.cards = cards);
  }

  changePageIndex(index): void {
    this.messageService.add('PageIndex changed.');
    this.getCards(index, this.pageSize);
  }
}
