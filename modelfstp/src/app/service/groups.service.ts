import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
 baseUrl="http://localhost:1998/SkillUp/admin/Group";
  constructor(private http:HttpClient) { }
  getGroup():Observable<any>{
   return  this.http.get(this.baseUrl+"/groups");
  }
  addGroup(Group:any):Observable<any>{
    return this.http.post(this.baseUrl+"/groups",Group);

  }
  deleteGroup(id:string):Observable<any>{
    const url = `${this.baseUrl}/groups/${id}`;
    return this.http.delete(url);
  }
  getGroupsName():Observable<any>{
    return this.http.get(this.baseUrl+"/groups/nameGroup");
  }
}
