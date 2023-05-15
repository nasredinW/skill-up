import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormationService} from "../../service/formation.service";
import {UserService} from "../../service/user.service";
import {Subscription} from "rxjs";


export interface Formation {
  id: string;
  userId: string;
  photo: string;
  photoPath?: string;
  userPhotoPath?: string;// Optional property for the file path
  title: string;
  dateCreation: Date;
  description: string;
  link: string;
  meetlink: string;
  type: string;
  showComment: boolean;
  nbr_like:number;
  username:string;
  dateSe:any;
  comments:[];
  commentsF:[]
}




@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  photo: string = "";
  groupName!: string;
  formations: Formation[] = [];



  constructor(private http: HttpClient,
              private formationService: FormationService,
              private userService: UserService,
              ) {
  }

  ngOnInit() {
    this.getFormation()

  }
  getFormation() {

    this.formationService.getFormation().subscribe({
      next: (res: any) => {
        this.formations = res;

        this.formations = res.map((cour: Formation) => ({
          ...cour,
          showComment: false,
        }));
        this.formations.forEach(cour => {
          cour.commentsF=cour.comments
          this.formationService.getFile(cour.photo).subscribe(response => {
            const blob = new Blob([response], {type: 'application/octet-stream'});
            const reader = new FileReader();
            reader.onload = () => {
              cour.photoPath = reader.result as string;
            };
            reader.readAsDataURL(blob);
          });
          this.userService.getUserById(cour.userId).subscribe({
            next: (res: any) => {
              cour.username = res.username;
              this.groupName = res.groupName;
              this.formationService.getFile(res.photo).subscribe(response => {
                const blob = new Blob([response], {type: 'application/octet-stream'});
                const reader = new FileReader();
                reader.onload = () => {
                  cour.userPhotoPath = reader.result as string;
                };
                reader.readAsDataURL(blob);
              });

            }
          })

        });
      }
    })
  }


 addLike(cour:Formation){
      this.formationService.like(cour.id).subscribe({
        next:(res:any)=>{
          cour.nbr_like=res;
        }
      })
 }


  trackByFn(index: any, item: any) {
    return item.id;
  }
}
