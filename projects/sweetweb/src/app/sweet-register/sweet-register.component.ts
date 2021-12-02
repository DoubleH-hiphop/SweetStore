import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sweet-register',
  templateUrl: './sweet-register.component.html',
  styles: [
  ]
})
export class SweetRegisterComponent implements OnInit {
  private mainUrl: string = "sweetApi/";
  public userName: string = '';
  public passWord: string = '';
  constructor(private http: HttpClient) { }

  getLogin(username: string, password: string) {
    const body = {
      username: username,
      password: password
    }

    let loginName = 'login';
    let loginUrl = this.mainUrl + loginName;
    this.http.post<any>(loginUrl, body).subscribe(
      res => { console.log(res, username, password) }
    )
  }

  ngOnInit() {
    this.getLogin("asd@gmail.com", "myPassword")
  }

}
