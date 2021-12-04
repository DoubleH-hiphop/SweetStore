import { Component, OnInit } from '@angular/core';
import { FetLibService } from '../../service/fet-lib.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styles: [
  ]
})
export class AllProductsComponent implements OnInit {

  public data: string[] = [];
  public dataList: string[] = [];
  constructor(public fetData: FetLibService) { }

  ngOnInit(): void {
    this.fetData.getAllData().subscribe(
      res1 => {
        this.data = res1.data;
        for(let i=0; i< this.data.length; i++){
          this.fetData.forGetData(i).subscribe(
            res2 => {
              // console.log(result.data)
              if(res2.data != 0){
                console.log(res2.data)
                this.dataList.push(res2.data);
              }
            }
          );
        }
      }
    );
  }
}
