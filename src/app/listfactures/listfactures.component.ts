import {Component, Inject, OnInit} from '@angular/core';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {FactureComponent} from '../facture/facture.component';
import {AdduserComponent} from '../adduser/adduser.component';

@Component({
  selector: 'app-listfactures',
  templateUrl: './listfactures.component.html',
  styleUrls: ['./listfactures.component.css']
})
export class ListfacturesComponent implements OnInit {

  constructor(private service: LoginService , public dialog: MatDialog , private appRouter: Router) { }

  ngOnInit() {
  }

  public openDialog() {

    const dialogRef = this.dialog.open(FactureComponent, {
      // width: "600px",
      // tslint:disable-next-line:object-literal-sort-keys
      // height: "600px",
      data: {},
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }

}
