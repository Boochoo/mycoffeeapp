import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { FormsModule } from "@angular/forms";

import { GeolocationService } from "./geolocation.service";
import { DataService } from "./data.service";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule,MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
  MatToolbarModule, MatCardModule, MatSlideToggleModule } from "@angular/material";
import 'hammerjs';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CoffeeComponent } from './coffee/coffee.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  }, {
    path: 'coffee',
    component: CoffeeComponent
  },{
    path: 'coffee/:id',
    component: CoffeeComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CoffeeComponent
  ],
  imports: [
    RouterModule.forRoot(routes), 
    FormsModule,
    BrowserModule, BrowserAnimationsModule, 
    MatFormFieldModule, MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
    MatToolbarModule, MatCardModule, MatSlideToggleModule
  ],
  providers: [GeolocationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
