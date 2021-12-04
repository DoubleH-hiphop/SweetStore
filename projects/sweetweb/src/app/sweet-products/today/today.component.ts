import { Component, OnInit } from '@angular/core';
import { FetLibService } from '../../service/fet-lib.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styles: [
  ]
})
export class TodayComponent implements OnInit {
  public todayList:string[]=[];
  constructor(public todaySev:FetLibService) { }

  ngOnInit(): void {
    this.todaySev.forGetData(1).subscribe(
      res=>{
        this.todayList = res.data;
      }
    )
  }

}
