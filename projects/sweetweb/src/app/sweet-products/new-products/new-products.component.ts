import { Component, OnInit } from '@angular/core';
import { FetLibService } from '../../service/fet-lib.service';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styles: [
  ]
})
export class NewProductsComponent implements OnInit {
  public newList:[]=[];
  constructor(public fetData:FetLibService) { }

  ngOnInit(): void {
    this.fetData.forGetData(3).subscribe(
      res=>{
        this.newList = res.data;
      }
    )
  }

}
