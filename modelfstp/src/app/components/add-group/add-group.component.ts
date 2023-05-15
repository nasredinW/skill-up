import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CoreService} from "../../core/core.service";
import {GroupsService} from "../../service/groups.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent {
  GroupForm!: FormGroup

  constructor(private _fb: FormBuilder, private _GroupService: GroupsService,
              private _dialogRef: MatDialogRef<AddGroupComponent>,
              private _alertService: CoreService
  ) {
    this.GroupForm = this._fb.group({
      idGroup: '',
      groupName: '',

    });
  }
  onGroupFormSubmit(){
    if (this.GroupForm.valid){
      this._GroupService.addGroup(this.GroupForm.value).subscribe({
      next:(res:any)=>{
        Swal.fire(
          'Saved' ,
          'Your Group has been saved.',
          'success'
        )
        this._dialogRef.close(true);
      }
      })
    }else{
      Swal.fire(
        'Group Exist!',
        'Group Already Exist.',
        'warning'
      )
    }

  }
}
