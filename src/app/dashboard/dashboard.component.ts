import { Component, OnInit } from '@angular/core';
import { Faction } from '../faction';
import { FactionService } from '../faction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  factions: Faction[] = [];

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
