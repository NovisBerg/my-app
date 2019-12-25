import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Card } from './card';
import { MessageService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  PHP_API_SERVER = 'http://localhost/myapp-backend';
  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient
  ) { }

  getCardsTotal(): Observable<number> {
    this.messageService.add('CardService: Total number of cards obtained');
    return this.httpClient.get<number>(`${this.PHP_API_SERVER}/getCardsTotal.php`);
}
  getCards(page, pageSize): Observable<Card[]> {
    this.messageService.add('CardService: fetched cards');
    return this.httpClient.get<Card[]>(`${this.PHP_API_SERVER}/readCards.php?page=${page}&pageSize=${pageSize}`);
  }



}
