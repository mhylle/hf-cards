import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {CardService} from "../services/card.service";
import {Card} from "../Card";
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {
  card$: Observable<Card>;

  constructor(private route: ActivatedRoute, private router: Router, private cardService: CardService) {
  }

  ngOnInit() {
    this.card$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.cardService.getCard(params.get('id')))
    )
  }

  save() {

  }
}
