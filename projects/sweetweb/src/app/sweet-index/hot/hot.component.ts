import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommand-hot',
  templateUrl: './recommand-hot.component.html',
  styleUrls: ['./recommand-hot.component.css']
})
export class RecommandHotComponent implements OnInit {

  getUrl = "sweetApi/";
  itemList: any;

  constructor(private http: HttpClient) { }

  getProduct(no: String) {
    this.http.get<any>(this.getUrl +'/'+ no).subscribe(
        res=>{this.itemList=res}
    );
  }

  ngOnInit(): void {
    this.getProduct("hot");
  }

}