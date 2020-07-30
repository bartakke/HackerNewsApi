import { Component, OnInit, Input } from '@angular/core';
import { HackerNewApi } from 'src/app/services/hackernewapi.service';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.css']
})
export class FeedItemComponent implements OnInit {

  @Input() feedItem;
  storiesTemp = []
  constructor(
    private _hackerNewApi: HackerNewApi
  ) {

  }

  ngOnInit(): void {
    console.log(this.feedItem)
  }
}
