import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../model/user';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';
import {AdduserComponent} from '../adduser/adduser.component';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  public listeuser: any;
  public displayedColumns: string[] = ['nom', 'prenom', 'email', 'username', 'action'];
  public dataSource = new MatTableDataSource(); // datasource;
  public columnNamesUser = [
    {
      id: 'nom',
      value: 'Nom',
    },
    {
      id: 'prenom',
      value: 'Prenom',
    },
    {
      id: 'email',
      value: 'Email',
    },
    {
      id: 'username',
      value: 'Login',
    },
  ];
  // @ts-ignore
  @ViewChild(MatSort) public sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) public paginator: MatPaginator;

  private  message: any ;
  constructor(private service: LoginService , public dialog: MatDialog , private appRouter: Router) { }

  ngOnInit() {
    this.loadUser();

  }
  public loadUser() {
    this.service.listeUser().subscribe(
      (rep) => {
        this.listeuser = rep ;
        this.dataSource.data = rep; // datasource = new MatTableDataSource(rep);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        // tslint:disable-next-line:no-console
        console.log(this.dataSource);
      }, (error1) => {
        // tslint:disable-next-line:no-console
        console.log(error1);
      },
    );
  }

  public openDialog() {

    const dialogRef = this.dialog.open(AdduserComponent, {
      // width: "600px",
      // tslint:disable-next-line:object-literal-sort-keys
      // height: "600px",
      data: {},
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadUser();
    });
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public openEditUserDialog(user: User, update: boolean): void {
    // tslint:disable-next-line:no-console
    console.log(update);
    const title = update ? 'Modifier un utilisateur ' : 'Visualiser utilisateur' ;
    const dialogRef = this.dialog.open(AdduserComponent, {
      width: '600px',
      // tslint:disable-next-line:object-literal-sort-keys
      height: '600px',
      data: { user, title, update },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadUser();
    });
  }

  public deleteUser(user: User) {
    this.service.deleteUser(user).subscribe(
      (rep) => {
        alert('deleted');
        this.appRouter.navigateByUrl('/users');
      }, (error) => {
// tslint:disable-next-line:no-console
        console.log(error);
      });
  }
}
