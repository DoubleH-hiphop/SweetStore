import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetLibService {


  private mainUrl: string = 'sweetApi/';
  constructor(private http: HttpClient) { }

  public getAllData() {
    let allDataName = 'getAllProductType';
    let allDataUrl = this.mainUrl + allDataName;
    return this.http.post<any>(allDataUrl, '');
  }

  public forGetData(typeId: number) {
    const body = {
      typeId: typeId,
    }
    let dataUrl = 'getProductsByTypeId';
    let allUrl = this.mainUrl + dataUrl;
    return this.http.post<any>(allUrl, body);
  }

}
