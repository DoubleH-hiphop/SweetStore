import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FetLibService } from '../service/fet-lib.service';

@Component({
  selector: 'app-sweet-index',
  templateUrl: './sweet-index.component.html',
  styles: [
  ]
})
export class SweetIndexComponent implements OnInit {
  constructor(private http: HttpClient, public fetData: FetLibService) { }

  public data: any;

  ngOnInit(): void {
    this.fetData.forGetData(1).subscribe(
      res => {this.data = res.data;}
    );
  }
}
