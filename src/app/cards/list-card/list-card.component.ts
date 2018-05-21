import { Component, OnInit } from '@angular/core';
import {CardService} from "../services/card.service";
import {Card} from "../Card";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  cards: Card[];
  constructor(private route: ActivatedRoute, private router: Router, private cardService: CardService) { }

  ngOnInit() {
    this.cardService.getCards().subscribe(value => {
      this.cards = value;
    })
  }

  gotoCard(id: string) {
    this.router.navigate(['/view-card', {id: id}]);
  }
}
