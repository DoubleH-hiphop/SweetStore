import { Component, OnInit } from '@angular/core';
import { FetLibService } from '../../service/fet-lib.service';

@Component({
  selector: 'app-hot',
  templateUrl: './hot.component.html',
  styles: [
  ]
})
export class HotComponent implements OnInit {
  public hotList:[]=[];
  constructor(public fetData:FetLibService) { }

  ngOnInit(): void {
    this.fetData.forGetData(2).subscribe(
      res => {
        this.hotList = res.data;
      }
    );
  }

}
