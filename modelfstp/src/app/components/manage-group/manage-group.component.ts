import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {GroupsService} from "../../service/groups.service";
import {AddEditUserComponent} from "../../add-edit-user/add-edit-user.component";
import {MatDialog} from "@angular/material/dialog";
import {AddGroupComponent} from "../add-group/add-group.component";
import Swal from "sweetalert2";

@Component({
  selector: 'app-manage-group',
  templateUrl: './manage-group.component.html',
  styleUrls: ['./manage-group.component.css']
})
export class ManageGroupComponent implements OnInit {
  displayedColumns: string[] = ['idGroup', 'groupName','Action'];
  dataSource!: MatTableDataSource<any>;
  constructor(private service:GroupsService,
              private dialog: MatDialog) {
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

ngOnInit() {
  this.getListGroups();
}


  getListGroups() {
    this.service.getGroup().subscribe({
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
  deleteGroup(id: string){
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
        this.service.deleteGroup(id).subscribe({
          next: (res) => {

            this.getListGroups();

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
  openAddGroupDialog(){

    const dialogRef = this.dialog.open(AddGroupComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        this.getListGroups();

      }
    })
  //add group
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
