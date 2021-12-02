import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class LogInOutService {
  public IsAdmin: boolean = false;
  Role: string = "anonymous";
  public userName: string | any = "";
  loginType: string = "Normal";
  constructor() {
    this.IsAdmin = localStorage.getItem('IsAdmin') ? true : false;
    this.userName = this.IsAdmin ? localStorage.getItem("UserName") : "";
  }

  login(userName: string, password: string): Observable<any> {
    this.userName = userName;
    this.loginType = "Normal";
    if (userName === userName && password === password) {
      this.IsAdmin = true;
      this.Role = this.userName;
    } else {
      this.IsAdmin = false;
      this.Role = "anonymous";
      this.userName = "";
    }
    this.saveState();
    return of(this.userName.pipe(delay(1000),
      tap(val => {
        console.log(`IsAdmin${val}; Role:${this.Role}`);
      })
     )
    )
  }

  saveState() {
    localStorage.setItem('IsAdmin', this.IsAdmin.toString());
    localStorage.setItem('Role', this.Role);
    localStorage.setItem('userName', this.userName? this.userName:"");
  }
}
