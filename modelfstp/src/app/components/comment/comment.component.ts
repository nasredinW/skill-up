import {Component, Input, OnInit} from '@angular/core';
import {FormationService} from "../../service/formation.service";
import {UserService} from "../../service/user.service";
import {AuthService} from "../../service/auth.service";


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments!: Comment[];
  newComment!: string;
  @Input() id!: string;
  userId!: string;


  constructor(private formService: FormationService,
              private userService: UserService,
              private auth: AuthService) {
  }

  ngOnInit() {
    this.getComment();
    this.getUserinfo();

  }


  getUserinfo() {
    this.auth.userInfo().subscribe({
      next: (res: any) => {
        console.log(res);
        this.userId = res.idUser
        console.log(this.userId);}
    })
  }
  getComment(){
    this.formService.getComment(this.id).subscribe({
      next:(res:any)=>{
        this.comments=res;
         console.log(res)
        this.comments.forEach(c=>{
          this.userService.getUserById(c.authorId).subscribe({
            next:(res:any)=>{
              c.photo=res.photo;
             c.username=res.username;
             c.groupName=res.groupName;
              this.formService.getFile(res.photo).subscribe(response => {
                const blob = new Blob([response], {type: 'application/octet-stream'});
                const reader = new FileReader();
                reader.onload = () => {
               c.urlphoto = reader.result as string;
                };
                reader.readAsDataURL(blob);
              });

            }
          })
        })

      }
    })
  }


  addComment() {
    if (this.newComment) {
      const comment: Comment = {
        authorId: this.userId,
        text: this.newComment,
        dateCreation:'',
        username:'',
        groupName:'',
        photo:'',
        urlphoto:''
      };
      console.log(this.userId)
      this.formService.Commenter(this.id, comment).subscribe({
        next: (res: any) => {
          this.getComment();
        }
      })
    }
    this.newComment = '';
  }
}

interface Comment {
  authorId: string;
  text: string;
  dateCreation:string;
  username:string;
  photo:string;
  urlphoto:string;
  groupName:string;

}

interface User {
  userId: string;
  photoLoc: string;
  photo?: string;
  username: string;

}
