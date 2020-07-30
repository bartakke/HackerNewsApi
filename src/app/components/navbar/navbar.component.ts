import { Component, OnInit } from '@angular/core';
import { HoldDataService } from 'src/app/services/holddata.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  feedtype = FEED_TYPES;
  constructor(
    private _holddataservice: HoldDataService,
  ) { }

  ngOnInit(): void {
  }

  redirecto(feedtype) {
    this._holddataservice.setchangefeedtype(feedtype)  ;
  }

}

export enum FEED_TYPES {
  new = 'newstories.json',
  show = 'showstories.json',
  ask = 'askstories.json',
  job = 'jobstories.json'
}
