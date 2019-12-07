import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Faction } from './faction';
import { FACTIONS } from './mock-factions';
import { MessageService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class FactionService {

  constructor(
    private messageService: MessageService
  ) { }

  getFactions(): Observable<Faction[]> {
    // TODO: send the message _after_ fetching the factions
    this.messageService.add('FactionService: fetched factions');
    return of(FACTIONS);
  }

  getFaction(id: number): Observable<Faction> {
    // TODO: send the message _after_ fetching the faction
    this.messageService.add(`FactionService: fetched faction id=${id}`);
    return of(FACTIONS.find(faction => faction.id === id));
  }
}
