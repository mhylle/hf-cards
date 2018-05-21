import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {CardService} from "../services/card.service";
import {Card} from "../Card";
import {Observable} from "rxjs/internal/Observable";
import {slideInDownAnimation} from '../../animations';
import {CardDetails} from "../CardDetails";



@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.css'],
  animations: [slideInDownAnimation]
})
export class ViewCardComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  card$: Observable<Card>;

  constructor(private route: ActivatedRoute, private router: Router, private cardService: CardService) {
  }

  ngOnInit() {
    this.card$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.cardService.getCard(params.get('id')))
    )
  }

  addDetail() {


  }
}
