import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../Card";
import {CardService} from "../services/card.service";
import {CardDetails} from "../CardDetails";

@Component({
  selector: 'app-create-detail',
  templateUrl: './create-detail.component.html',
  styleUrls: ['./create-detail.component.css']
})
export class CreateDetailComponent implements OnInit {
  @Input()
  card: Card;
  cardDetail: CardDetails = new CardDetails();
  constructor(private cardService: CardService) {
  }

  ngOnInit() {
  }

  save() {
    if (this.cardDetail.description == null || this.cardDetail.description == "") {
      return;
    }
    this.cardDetail.date = new Date();
    this.card.details.push(this.cardDetail);
    this.cardService.updateCard(this.card).subscribe(value => {
        if (value != null) {
          this.cardDetail = new CardDetails();
        } else {
          console.log('error creating card');
        }
      }
    )
  }
}
