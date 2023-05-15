import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {BehaviorSubject, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = "http://localhost:1998";
  private userSubject!: BehaviorSubject<any>;


  constructor(private http: HttpClient,
              private route: Router) {
    // @ts-ignore
    const user = JSON.parse(localStorage.getItem('user'));
    this.userSubject = new BehaviorSubject<any>(user);
  }
  userInfo(): Observable<any> {
    return this.userSubject.asObservable();
  }


  login(user: any): Observable<any> {
    const url = `${this.baseUrl}/api/v1/auth/authenticate`;
    return this.http.post<any>(url, user).pipe(
      tap(res => {
        localStorage.setItem('token', res.AccessToken);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.userInfo = res.user;
        console.log(user)
      })
    );

  }

  getUser(): any {
    return this.userInfo;
  }

  getId(): any {
    return this.getUser().getId();
  }

  logout(): void {
    localStorage.clear()
    this.route.navigate(['/login']);
  }

}
