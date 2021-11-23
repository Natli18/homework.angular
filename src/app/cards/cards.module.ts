import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardsComponent} from "./cards.component";
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";

const routes: Routes = [
  {
    path: '',
    component: CardsComponent
  }
]

@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule
  ]
})
export class CardsModule { }
