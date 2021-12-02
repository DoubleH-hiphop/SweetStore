import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hot } from '../hot';

@Injectable({
  providedIn: 'root'
})
export class FetLibService {

  public getData = new Hot();
  public data: Hot[] = [];

  private mainUrl: string = 'sweetApi/';
  constructor(private http: HttpClient) { }

  forGetData(typeId: number) {
    const body = {
      typeId: typeId,
    }
    let dataUrl = 'getProductsByTypeId';
    let allUrl = this.mainUrl + dataUrl;
    return this.http.post<Hot[]>(allUrl, body).subscribe(
      (data: Hot[]) => {
        return this.data
      }
    )
  }
}
