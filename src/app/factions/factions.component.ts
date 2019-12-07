import { Component, OnInit } from '@angular/core';

import { Faction } from '../faction';
import { FactionService } from '../faction.service';
import { MessageService } from '../messages.service';

@Component({
  selector: 'app-factions',
  templateUrl: './factions.component.html',
  styleUrls: ['./factions.component.css']
})
export class FactionsComponent implements OnInit {
  factions: Faction[];

  constructor(
    private factionService: FactionService
  ) { }

  ngOnInit() {
    this.getFactions();
  }


  getFactions(): void {
    this.factionService.getFactions().subscribe(factions => this.factions = factions);
  }
}
