import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "http://localhost:1998/SkillUp/admin"
  profileUrl: string = "http://localhost:1998/user/profilDetail"

  constructor(private _http: HttpClient) {
  }


  Adduser(data: any): Observable<any> {
    return this._http.post(this.baseUrl + "/AddUser", data);
  }

  getUsers(): Observable<any> {
    return this._http.get(this.baseUrl + "/users");
  }

  deleteUser(id: string): Observable<any> {
    const url = `${this.baseUrl}/users/${id}`;
    return this._http.delete(url);
  }

  updateUser(username: string, data: any): Observable<any> {
    const url = `${this.baseUrl}/users/${username}`;
    return this._http.put(url, data);
  }

  updateUserPhoto(id:string, data:any):Observable<any>{

    const  url  = `${this.profileUrl}/user/${id}`;
    return  this._http.put(url,data);
  }
  getUserById(id:any):Observable<any>{
    const url =`${this.baseUrl}/user/${id}`
    return this._http.get(url);

  }

}
