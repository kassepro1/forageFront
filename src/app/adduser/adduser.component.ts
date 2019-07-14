import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  public  add = false;
  public update = false;
  public  processValidation = false;
  public lrole: any ;
  public userForm = new FormGroup({
    id: new FormControl(''),
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    // tslint:disable-next-line:object-literal-sort-keys
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', Validators.required),
    matricule: new FormControl('', Validators.required),
    tel: new FormControl('', Validators.required),
    roles: new FormControl('', Validators.required),
  });
  public roles: any;
  private auxT: any[] = [];
  constructor(private service: LoginService , private route: Router , public dialogRef: MatDialogRef<AdduserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  public ngOnInit() {
    this.getRole();
    // tslint:disable-next-line:triple-equals
    if (this.data.user != undefined && this.data.user != null) {
      this.update = true ;
      this.userForm.patchValue(this.data.user);

    }
  }

  public addUser() {
    // tslint:disable-next-line:no-console
    console.log(this.userForm.value);
    // tslint:disable-next-line:triple-equals
    if (this.userForm.value.id != undefined && this.userForm.value.id != null && this.update == true) {
      this.service.editUser(this.userForm.value).subscribe(
        (rep) => {
          alert('updated') ;
          this.route.navigateByUrl('/user');
        }, (error1) => {
          // tslint:disable-next-line:no-console
          console.log(error1);
        },
      );
    } else {
      // tslint:disable-next-line:no-console
      console.log(this.userForm.value);
      this.service.addUser(this.userForm.value).subscribe(
        (rep) => {
          alert('added') ;
          this.route.navigateByUrl('/user');
        }, (error1) => {
          // tslignt:disable-next-line:no-console
          console.log(error1);
        },
      );
    }

  }

  public getRole() {
    this.service.roles().subscribe(
      (rep) => {
        console.log(rep);
        this.lrole = rep ;
      }, (error1) => {
        // tslint:disable-next-line:no-console
        console.log(error1);
      },
    );
  }
  public onSelection(e) {
    // tslint:disable-next-line:no-console
    console.log(e);
  }

}
