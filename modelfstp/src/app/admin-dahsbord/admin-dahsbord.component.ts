import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddEditUserComponent} from "../add-edit-user/add-edit-user.component";
import {UserService} from "../service/user.service";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {CoreService} from "../core/core.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-admin-dahsbord',
  templateUrl: './admin-dahsbord.component.html',
  styleUrls: ['./admin-dahsbord.component.css']
})
export class AdminDahsbordComponent implements OnInit {
  manageUser = false;
  managegroup = false

  manageUsers() {
    this.manageUser = true;
    this.managegroup = false;
  }

  manageGroup() {
    this.managegroup = true
    this.manageUser = false

  }

  displayedColumns: string[] = [
    'idUser',
    'username',
    'profileName',
    'groupName',
    'statu',
    'Action'
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog, private _userService: UserService,
              private _alertService: CoreService) {
  }

  ngOnInit() {
    this.getListUsers();
  }

  changeUserPwd(id: string) {
    //change pwd to null
  }
  openAddUserDialog() {
    const dialogRef = this.dialog.open(AddEditUserComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        this.getListUsers();
      }
    })

  }
  openEditUserDialog(data: any) {
    const dialogRef = this.dialog.open(AddEditUserComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        this.getListUsers();
      }
    })
  }

  getListUsers() {
    this._userService.getUsers().subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      }, error: (err) => {
        console.log(err);
      }
    })
  }

  logout() {
  }

  deleteUser(id: string) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._userService.deleteUser(id).subscribe({
          next: (res) => {

            this.getListUsers();

          }, error: (err) => {
            console.log(err);
          }
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
