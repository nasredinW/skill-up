import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../service/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../../service/user.service";
import {UploadFileComponent} from "../upload-file/upload-file.component";
import Swal from "sweetalert2";
import {AddEditFormationComponent} from "../add-edit-formation/add-edit-formation.component";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  username!: string;
  idUser!:string;
  statu!:string;
  userPhoto:string='';
  userPhotoId:any;
  Id:string="" ;
  GroupName:string="";

  constructor(private rout: Router,
              private http: HttpClient,
              private auth: AuthService,
              private dialog: MatDialog,
              private userService: UserService) {
  }

  ngOnInit() {
    this.auth.userInfo().subscribe((user:any) => {
      this.username = user.username;
      this.statu = user.statu;
      this.idUser = user.idUser;
      this.Id=user.id;
      this.userPhoto = user.photo;
      this.GroupName=user.groupName;

    });
    this.getFile(this.userPhoto);
  }

  openUploadDialog() {
    const dialogRef = this.dialog.open(UploadFileComponent);
    dialogRef.afterClosed().subscribe({
      next: (val: any) => {
        this.userPhotoId=val;
        this.getFile(this.userPhotoId)
        this.userService.updateUserPhoto(this.Id,this.userPhotoId)
          .subscribe({
            next:(res:any)=>{
              //sweet
            }
          })}
    })
  }
  opeAddFormation(){
    const dialogRef=this.dialog.open(AddEditFormationComponent);

  }








  getFile(fileId:any) {

    if (fileId) {
      this.http.get("http://localhost:1998/SkillUp/Formation/file" + "/" + fileId, {responseType: 'arraybuffer'})
        .subscribe(response => {
          const blob = new Blob([response], {type: 'application/octet-stream'});
          const reader = new FileReader();
          reader.onload = () => {
            this.userPhoto = reader.result as string;

          };
          reader.readAsDataURL(blob);
        });
    }
  }
  logout() {
    this.auth.logout();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Logout Successfully',
      showConfirmButton: false,
      timer: 1500,

    })
  }






}
