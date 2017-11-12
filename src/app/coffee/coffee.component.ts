import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coffee } from '../logic/Coffee';
import { GeolocationService } from '../geolocation.service';
import { TastingRating } from '../logic/TastingRating';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CoffeeComponent implements OnInit {

  //coffeTypePlaceholder = "Coffee Type";
  coffee: Coffee;
  types = ['Espress', 'Americano', 'Ristretto', 'Cappuccino'];

  constructor(private route: ActivatedRoute, private geolocation: GeolocationService) { }

  routingSubscription: any;

  tastingRatingChanged (checked: boolean) {
    if (checked) {
      this.coffee.tastingRating = new TastingRating();
    } else {
      this.coffee.tastingRating = null;
    }
  } 

  cancel () {

  }
  
  save () {

  }

  ngOnInit() {
    this.coffee = new Coffee();
    
    this.routingSubscription = this.route.params.subscribe(params => {
      console.log(params['id']);
    });

    this.geolocation.requestLocation( location => {
      if (location) {
        this.coffee.location.latitude = location.latitude;
        this.coffee.location.longitude = location.longitude;
      } else {

      }
    })
  }

  ngOnDestroy(){
    this.routingSubscription.unsubscribe();
  }

}