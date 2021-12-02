import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sweet-products',
  templateUrl: './sweet-products.component.html',
  styles: [
  ]
})

export class SweetProductsComponent implements OnInit {
  private mainUrl: string = 'sweetApi/';

  constructor(private http: HttpClient) { }

  public searchProducts(inputValue: string) {
    const toSearchInfo = {
      productToSearch: inputValue,
    }
    let searchProductName = 'searchProduct';
    let searchProductUrl = this.mainUrl + searchProductName;
    return this.http.post<any>(searchProductUrl, toSearchInfo).subscribe(
      res => { console.log(res, toSearchInfo); }
    );
  }

  ngOnInit(): void { }
}
