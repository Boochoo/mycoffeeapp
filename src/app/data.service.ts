import {Injectable} from '@angular/core';
import { Coffee } from './logic/Coffee';
import { PlaceLocation } from './logic/PlaceLocation';

@Injectable()
export class DataService {

  constructor() {
  }

  getList(callback) {
    const list = [
      new Coffee("Double Espresso", "Sunny Cafe", new PlaceLocation('123 Market St', "San Fransisco")),
      new Coffee("Caramel Americano", "Starcoffee", new PlaceLocation("Gran Via 34", "Madrid"))
    ];
    callback(list);
  }

  save(coffee, callback) {
    callback(true);
  }

}
