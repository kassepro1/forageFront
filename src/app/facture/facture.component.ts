import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  isLinear = false;
  public addFactureForm = new FormGroup({
    id: new FormControl('', Validators.required),
    consnetChiffre: new FormControl('', Validators.required),
    consnetLettre: new FormControl('', Validators.required),
    // tslint:disable-next-line:object-literal-sort-keys
    mois: new FormControl('', Validators.required),
    montant: new FormControl('', Validators.required),


  });
  constructor(private service: LoginService , public dialog: MatDialog , private appRouter: Router) {}

  ngOnInit() {
  }
  public addFacture() {
    console.log(this.addFactureForm.value);
    this.service.addFacture(this.addFactureForm.value).subscribe(
      rep => {
        alert('Facture ajoute avec succes');
      }, error1 => {
        console.log(error1);
      }
    );
  }
  CompteurExist(numeroCompteur) {
    this.service.findCompteur(numeroCompteur).subscribe(
      rep => {
        console.log(rep);
        if (rep != null) {
          alert('Ce  existe');
        } else {
          alert('Ce Compteur n\' existe pas');
        }

      }, error1 => {
        console.log(error1);
      }
    );
  }
}
