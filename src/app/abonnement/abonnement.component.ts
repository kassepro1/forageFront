import {Component, Inject, OnInit} from '@angular/core';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {VillageComponent} from '../village/village.component';
import {AdduserComponent} from '../adduser/adduser.component';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.css']
})
export class AbonnementComponent implements OnInit {

  constructor(private service: LoginService , public dialog: MatDialog , private appRouter: Router) { }

  ngOnInit() {
  }

  public openDialog() {

    const dialogRef = this.dialog.open(VillageComponent, {
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
