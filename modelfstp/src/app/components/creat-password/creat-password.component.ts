import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-creat-password',
  templateUrl: './creat-password.component.html',
  styleUrls: ['./creat-password.component.css']
})
export class CreatPasswordComponent {
  form: FormGroup;
  Us = localStorage.getItem('username')
  private baseUrl = "http://localhost:1998/api/v1/auth";

  constructor(private http: HttpClient,
              private _auth: AuthService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<CreatPasswordComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { title: string }
  ) {
    this.form = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(group: FormGroup) {

    // @ts-ignore
    const password = group.get('password').value;
    // @ts-ignorex
    const confirmPassword = group.get('confirmPassword').value;

    return password === confirmPassword ? null : {passwordMismatch: true};
  }


  onSubmit() {
    if (this.form.valid) {
      const url = `${this.baseUrl}/users/${this.Us}`;
      // @ts-ignore
      const password:string = this.form.get('confirmPassword').value;
      this.http.put(url, password).subscribe({
        next: (res: any) => this.dialogRef.close(this.form.value)
      })


    }
  }

}
