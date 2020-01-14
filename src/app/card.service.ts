import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Card } from './card';
import { MessageService } from './messages.service';
import { catchError, map, tap } from 'rxjs/operators';

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


  /* GET cards whose name contains search term */
  searchCards(term: string): Observable<Card[]> {
    if (!term.trim()) {
      // if not search term, return empty card array.
      return of([]);
    }
    return this.httpClient.get<Card[]>(`${this.PHP_API_SERVER}/searchCards.php/?cname=${term}`);
  }

}
