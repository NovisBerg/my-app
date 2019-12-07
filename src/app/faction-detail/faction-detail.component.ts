import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Faction } from '../faction';
import { FactionService } from '../faction.service';

@Component({
  selector: 'app-faction-detail',
  templateUrl: './faction-detail.component.html',
  styleUrls: ['./faction-detail.component.css']
})
export class FactionDetailComponent implements OnInit {
  @Input() faction: Faction;
  constructor(
    private route: ActivatedRoute,
    private factionService: FactionService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getFaction();
  }

  getFaction(): void {
    const id = + this.route.snapshot.paramMap.get('id'); // 取得路由地址中的id变量
    this.factionService.getFaction(id).subscribe(faction => this.faction = faction);
  }

  goBack(): void {
    this.location.back();
  }
}
