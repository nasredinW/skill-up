import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../service/auth.service";
import Swal from "sweetalert2";
import {UploadFileComponent} from "../upload-file/upload-file.component";
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../../service/user.service";
import {MatAccordion} from "@angular/material/expansion";
import {FormationService} from "../../service/formation.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  selected!: Date | null;
  formations:any[]=[];
  photo:any;


  constructor(private formationService:FormationService,
              private userService: UserService) {
  }

 ngOnInit() {
    this.getFormation();
 }
 getFormation(){
    this.formationService.getFormation().subscribe({
      next:(res:any)=>{
        this.formations=res


      }
    })
 }



}
