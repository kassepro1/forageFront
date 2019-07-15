import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { VillageComponent } from './village/village.component';
import {RouterModule, Routes} from '@angular/router';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule, MatIconModule, MatInputModule, MatListModule,
  MatPaginatorModule, MatRadioModule,
  MatSelectModule,
  MatSortModule, MatStepperModule,
  MatTableModule, MatTooltipModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListuserComponent } from './listuser/listuser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { FactureComponent } from './facture/facture.component';
import { ReglementComponent } from './reglement/reglement.component';

const appRoutes: Routes = [
  {path: 'reglement', component: ReglementComponent},
  {path: 'facture', component: FactureComponent},
  {path: 'village', component: VillageComponent},
  {path: 'abonnement', component: AbonnementComponent},
  {path: 'user', component: ListuserComponent},
  {path: '', redirectTo: '/village', pathMatch: 'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    VillageComponent,
    ListuserComponent,
    AdduserComponent,
    AbonnementComponent,
    FactureComponent,
    ReglementComponent
  ],
  entryComponents: [AdduserComponent , VillageComponent] ,
  imports: [
    BrowserModule ,
    BrowserAnimationsModule ,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    CdkTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSortModule,
    MatIconModule,
    MatListModule ,
    MatSelectModule ,
    MatStepperModule ,
    MatRadioModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
