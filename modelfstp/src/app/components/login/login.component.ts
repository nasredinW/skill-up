import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {faLock} from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from "@angular/material/dialog";
import {CreatPasswordComponent} from "../creat-password/creat-password.component";
import {CoreService} from "../../core/core.service";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  logoUrl1 = '../../assets/img/SkillsUp (2).png';

  faLock = faLock;
  loginForm!: FormGroup;

  constructor(private _fb: FormBuilder,
              private dialog: MatDialog,
              private _auth: AuthService,
              private _alertService: CoreService,
              private router: Router
  ) {
    this.loginForm = this._fb.group({
      username: '',
      password: '',
    });
  }

  onSubmit() {
    console.log(this.loginForm.value)

    this._auth.login(this.loginForm.value)
      .subscribe({
        next: (res: any) => {


          if (res.message === "Password Expired") {
            localStorage.setItem('username',res.username);
            this.openDialog();
          } else {
            this.router.navigate(['/home']);
          }
        }
      })


  }


  openDialog() {
    const dialogRef = this.dialog.open(CreatPasswordComponent, {
      width: '500px',
      data: {title: 'Confirm New Password'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
