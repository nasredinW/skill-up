import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {FormationService} from "../../service/formation.service";
import {UploadFileComponent} from "../upload-file/upload-file.component";
import {GroupsService} from "../../service/groups.service";
import {AuthService} from "../../service/auth.service";
import {QuizServiceService} from "../../service/quiz-service.service";

@Component({
  selector: 'app-add-edit-formation',
  templateUrl: './add-edit-formation.component.html',
  styleUrls: ['./add-edit-formation.component.css']
})
export class AddEditFormationComponent implements OnInit {
  requiredFileType!: string;
  sessionOpen = false;

  fileName = '';
  formationForm!: FormGroup
  groupNames: string[] = [];
  userId = localStorage.getItem("userId")
  quizId!:string;


  constructor(private http: HttpClient,
              private _fb: FormBuilder,
              private _groupService: GroupsService,
              private _formationServ: FormationService,
              private _auth: AuthService,
              private _quizService: QuizServiceService,
              private dialog: MatDialog,
              private _service: FormationService) {
    this.formationForm = this._fb.group({
      title: '',
      description: '',
      link: '',
      pdf: '',
      photo: '',
      groupName: '',
      type: '',
      userId: '',
      quizId:'',
      meetlink:'',
      duree:'',
      dateSe:''
    });
  }

  ngOnInit() {
    this.getNomsGroups();
    this._auth.userInfo().subscribe((user: any) => {
      this.userId = user.idUser;
    });

  }

  session() {
    this.sessionOpen = true;
  }
  cour() {
    this.sessionOpen = false;
  }
  onFormationSubmit() {
    const cour = this.formationForm.get('userId');
    cour?.setValue(this.userId);
    const cour2 = this.formationForm.get('quizId');
    cour2?.setValue(this.quizId);
    console.log(this.formationForm.value);
    this._formationServ.addFormation(this.formationForm.value).subscribe({
      next: (res: any) => {
        console.log(res);
      }
    })
  }
  addItem(newQuiz: any) {
    console.log('quiz', newQuiz)
    const quiz = {
      questions: newQuiz
    };
    this._quizService.addQuiz(quiz).subscribe(
      (result:any )=> {
        this.quizId=result.id
        console.log('quiz created',result.id)
      }
      , error => console.error('Error adding quiz!', error)
    );

  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      formData.append("file", file);
      this._service.CreatFileUrl(formData).subscribe({
        next: (res: any) => {
          const ul = res.fileUrl;
          const linkControl = this.formationForm.get('pdf');
          linkControl?.setValue(ul);
        }
      })
    }
  }

  getNomsGroups() {
    this._groupService.getGroupsName().subscribe({
      next:(res:any)=>{
        this.groupNames=res.groupNames;
      }
    })
  }
  openUploadDialog() {
    const dialogRef = this.dialog.open(UploadFileComponent);
    dialogRef.afterClosed().subscribe({
      next: (res: any) => {
        const photo = this.formationForm.get('photo');
        photo?.setValue(res);
      }
    })
  }
}
