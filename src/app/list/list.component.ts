import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { Coffee } from '../logic/Coffee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

  list: [Coffee]

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getList(list => {
      this.list = list
    })
  }
}
