import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../service/user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CoreService} from "../core/core.service";
import {GroupsService} from "../service/groups.service";

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {
  userForm: FormGroup
  profil: string[] = [
    'US',
    'ADM',
    'EXP',
    'MOD'
  ]
  groupNames:string[]=[];
  constructor(private _fb: FormBuilder, private _userService: UserService,
                private _dialogRef: MatDialogRef<AddEditUserComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private _alertService: CoreService,
              private _groupService:GroupsService
  ) {
    this.userForm = this._fb.group({
      username: '',
      groupName: '',
      profileName: '',

    });
  }

  ngOnInit() {
    this.userForm.patchValue(this.data);
    this.getNomsGroups();

  }
  getNomsGroups(){
    this._groupService.getGroupsName().subscribe({
      next:(res:any)=>{
      this.groupNames=res.groupNames;
    }

    })
  }

  onUserFormSubmit() {
    if (this.userForm.value) {
      if (this.data) {
        //update  user
        this._userService.updateUser(this.data.username, this.userForm.value)
          .subscribe({
            next: (val: any) => {
              this._alertService.openSnackBar("User Updated !!", "Update");

              this._dialogRef.close(true);
            }
          })
      } else {
        //add user
        console.log(this.userForm.value)
        this._userService.Adduser(this.userForm.value).subscribe({
          next: (val: any) => {
            this._alertService.openSnackBar("User Added !!", "Add");

            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err)
          }
        })
      }
    }
  }
}
