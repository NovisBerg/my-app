import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Faction } from './faction';
import { MessageService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class FactionService {
  PHP_API_SERVER = 'http://localhost/myapp-backend';

  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient
  ) { }

  // getFactions(): Observable<Faction[]> {
  //   // TODO: send the message _after_ fetching the factions
  //   this.messageService.add('FactionService: fetched factions');
  //   return of(FACTIONS);
  // }
  getFactions(): Observable<Faction[]> {
    this.messageService.add('FactionService: fetched factions');
    return this.httpClient.get<Faction[]>(`${this.PHP_API_SERVER}/readFactions.php`);
  }



  // getFaction(id: number): Observable<Faction> {
  //   // TODO: send the message _after_ fetching the faction
  //   this.messageService.add(`FactionService: fetched faction id=${id}`);
  //   return of(FACTIONS.find(faction => faction.id === id));
  // }
  getFaction(id: number): Observable<Faction> {
    this.messageService.add(`FactionService: fetched faction id =${id}`);
    return this.httpClient.get<Faction>(`${this.PHP_API_SERVER}/readFactionDetail.php?id=${id}`);
  }

}
