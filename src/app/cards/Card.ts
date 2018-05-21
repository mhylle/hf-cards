import {CardDetails} from "./CardDetails";

export class Card {
  id?: string;
  firstname:string;
  lastname: string;
  phone: string;
  email: string;
  details: CardDetails[];
}
