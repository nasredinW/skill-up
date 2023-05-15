import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  baseUrl: string = "http://localhost:1998/SkillUp/Formation"

  constructor(private _http: HttpClient) {
  }


  addFormation(Cour: any): Observable<any> {
    return this._http.post(this.baseUrl + "/formation", Cour);
  }

  getFormation(): Observable<any> {
    return this._http.get(this.baseUrl + "/formation")
  }


  CreatFileUrl(file: any): Observable<any> {
    return this._http.post(this.baseUrl + "/upload", file);
  }
  like(id:string):Observable<any>{
 const url = `${this.baseUrl}/like/${id}`;
   return this._http.post(url,'')  ;
  }
  Commenter(id:string,data:any):Observable<any>{
    const url=`${this.baseUrl}/${id}/comment`;
    return this._http.post(url,data);
  }
  getComment(id:string):Observable<any>{
    const url=`${this.baseUrl}/formations/${id}/comments`;
    return this._http.get(url);
  }

  getFile(fileId: any): Observable<any> {
    return this._http.get(this.baseUrl+ "/file/" + fileId, {responseType: 'arraybuffer'})
  }

}
