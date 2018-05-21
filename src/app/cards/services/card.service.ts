import {Injectable} from '@angular/core';
import {Card} from "../Card";
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AngularFireDatabase} from "angularfire2/database";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) {
  }

  createCard(newCard: Card): Observable<Card> {
    return this.http.post<Card>(API_URL + '/cards/', newCard)
  }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(API_URL + '/cards')
  }


  getCard(id: string) : Observable<Card>{
    return this.http.get<Card>(API_URL + '/cards/' + id);
  }

  updateCard(card: Card) {
    return this.http.put<Card>(API_URL + '/cards/' + card.id, card);
  }
}
