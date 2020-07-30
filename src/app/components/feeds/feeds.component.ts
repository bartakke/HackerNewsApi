import { Component, OnInit } from '@angular/core';
import { HackerNewApi } from 'src/app/services/hackernewapi.service';
import { HoldDataService } from 'src/app/services/holddata.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  storiesTemp = [];
  showLoader: boolean = false;
  workFlow: Subscription;
  temp = 'newstories.json';
  constructor(
    private _hackerNewApi: HackerNewApi,
    private _holddataservice: HoldDataService,
  ) { }

  ngOnInit(): void {
    this.workFlow = this._holddataservice.selectedFeedType.subscribe((value) => {
      this.getFeedsData(value);
    });

    this.getFeedsData(this.temp);
  }

  getFeedsData(feedtype) {
    this.storiesTemp = [];
    this._hackerNewApi.get(feedtype).subscribe(item => {

      Object.values(item).slice(0, 12).forEach(feed => {
        this.showLoader = true;
        this._hackerNewApi.get(`item/${ feed }.json`).subscribe(item => {
          this.showLoader = false;
          this.storiesTemp.push(item);
        });
      })
    })
  }


  ngOnDestroy(): void {
    if (this.workFlow) {
      this.workFlow.unsubscribe();
    }
  }
}
