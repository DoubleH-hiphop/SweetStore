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
  private mainUrl = "sweetApi/";
  
  constructor(private http: HttpClient, public fetData:FetLibService) { }


  private getData(typeId: number) {
    const body = {
      typeId: typeId,
    }
    let functionName = 'getProductsByTypeId';
    let allUrl = this.mainUrl + functionName;
    this.http.post<any>(allUrl, body).subscribe(
      res => { console.log(res, typeId) })
  }

  

  ngOnInit(): void {
    this.fetData.forGetData(1);

  }
}
