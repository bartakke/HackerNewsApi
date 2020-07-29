import { Component, OnInit } from '@angular/core';
import { HackerNewApi } from 'src/app/services/hackernewapi.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  storiesTemp = [];

  constructor(
    private _hackerNewApi: HackerNewApi
  ) { }

  ngOnInit(): void {
    this.getFeedsData();
  }

  getFeedsData() {
    this._hackerNewApi.get('newstories.json').subscribe(item => {

      Object.values(item).slice(0, 10).forEach(feed => {

        this._hackerNewApi.get(`item/${ feed }.json`).subscribe(item => {
          console.log(item)
          this.storiesTemp.push(item);
        });
      })
    })
  }
}
