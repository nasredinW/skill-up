import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatDialogRef} from "@angular/material/dialog";
import Swal from "sweetalert2";
import {FormationService} from "../../service/formation.service";


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  @Input()
  requiredFileType!: string;

  fileName = '';
  fileResult: any
  uploded = false;
  fileUrl = "";

  constructor(private http: HttpClient,
              private _dialogRef: MatDialogRef<UploadFileComponent>,
              private forService: FormationService) {
  }

  ngOnInit(): void {

  }


  getFile(fileId: any) {
    if (fileId) {
      this.forService.getFile(fileId)
        .subscribe(response => {
          const blob = new Blob([response], {type: 'application/octet-stream'});
          const reader = new FileReader();
          reader.onload = () => {
            this.fileResult = reader.result as string;
            this.uploded = true
          };
          reader.readAsDataURL(blob);
        });
    }
  }


  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      formData.append("file", file);

      this.http.post("http://localhost:1998/SkillUp/Formation/upload", formData).subscribe({
        next: (res: any) => {
          //alert
          this.fileUrl = res.fileUrl;
          this.fileResult = this.getFile(res.fileUrl);
          Swal.fire(
            'Uploded!',
            'Your file has been uploded.',
            'success'
          )


        }
      })


    }
  }


}



