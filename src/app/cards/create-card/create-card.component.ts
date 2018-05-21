import {Component, OnInit} from '@angular/core';
import {Card} from "../Card";
import {CardService} from "../services/card.service";
import {CardDetails} from "../CardDetails";

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  newCard: Card = new Card();
  cardDetail: string;
  constructor(private cardService: CardService) {
  }

  ngOnInit() {
  }

  save() {
    console.log('Firstname: ' + this.newCard.firstname);
    this.newCard.details = [];
    this.cardService.createCard(this.newCard).subscribe(value => {
        if (value != null) {
          this.newCard = new Card();
        } else {
          console.log('error creating card');
        }
      }
    )
  }

}
