import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reglement',
  templateUrl: './reglement.component.html',
  styleUrls: ['./reglement.component.css']
})
export class ReglementComponent implements OnInit {

  isLinear = false;
  public addReglementForm = new FormGroup({
    id: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    montant: new FormControl('', Validators.required),
    taxe: new FormControl('', Validators.required),
  });
  constructor(private service: LoginService , public dialog: MatDialog, private appRouter: Router) {}

  ngOnInit() {

  }

  public addReglemet() {
    console.log(this.addReglementForm.value);
    this.service.addReglement(this.addReglementForm.value).subscribe(
      rep => {
        alert('reglement ajoute avec succes');
      }, error1 => {
        console.log(error1);
      }
    );
  }

  numeroExist(numero) {
    this.service.findFacture(numero).subscribe(
      rep => {
        console.log(rep);
        if (rep != null) {

          alert('Cette facture existe');
        } else {
          alert('Cette facture n\' existe pas');
        }

      }, error1 => {
        console.log(error1);
      }
    );
  }


}
