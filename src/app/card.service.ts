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

  getCards(): Observable<Card[]> {
    this.messageService.add('CardService: fetched cards');
    return this.httpClient.get<Card[]>(`${this.PHP_API_SERVER}/readCards.php?start=1&end=20`);
  }



}
