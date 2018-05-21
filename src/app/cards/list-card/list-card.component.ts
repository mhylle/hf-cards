import {Component, OnInit} from '@angular/core';
import {CardService} from "../services/card.service";
import {Card} from "../Card";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {
  letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z', 'Æ', 'Ø', 'Å', 'Alle'];

  shownCards: Card[];
  cards: Card[];

  constructor(private route: ActivatedRoute, private router: Router, private cardService: CardService) {
  }

  ngOnInit() {
    this.cardService.getCards().subscribe(value => {
      this.cards = value;
      this.shownCards = value;
      this.shownCards.sort((a, b) => {
        return a.firstname.localeCompare(b.firstname);
      });
    })
  }

  gotoCard(id: string) {
    this.router.navigate(['/view-card', {id: id}]);
  }

  doFilter(letter: string) {
    console.log(letter);
    if (letter == 'Alle') {
      this.shownCards = this.cards;
      return;
    }
    this.shownCards = this.cards.filter(value => {
      if (value.firstname.toLowerCase().startsWith(letter.toLowerCase())) {
        return value;
      }
    });

    for (let i = 0; i < this.shownCards.length; i++) {
      let shownCard = this.shownCards[i];
      console.log(shownCard.firstname);

    }
  }
}
