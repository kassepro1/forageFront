import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit {
  isLinear = false;

  public addAbonnementForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nomVillage: new FormControl('', Validators.required),
    nomFamille: new FormControl('', Validators.required),
    // tslint:disable-next-line:object-literal-sort-keys
    adresse: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl('', Validators.required),
    estchef: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),

  });
  constructor(private service: LoginService , public dialog: MatDialog , private appRouter: Router) {}

  ngOnInit() {

  }

  public addAbonnement() {
    console.log(this.addAbonnementForm.value);
    this.service.addAbonnement(this.addAbonnementForm.value).subscribe(
     rep => {
       alert('abonnement ajoute avec succes');
     }, error1 => {
       console.log(error1);
     }
   );
  }

  villageExist(nomvillaage) {
   this.service.findVillage(nomvillaage).subscribe(
     rep => {
       console.log(rep);
       if (rep != null) {
         alert('Ce village existe et a un chef');
       } else {
         alert('Ce village n\' existe pas et a besoin d\'un  chef');
       }

     }, error1 => {
       console.log(error1);
     }
   );
  }

}
