import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

const modules= [
  MatCardModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ...modules
  ]
})

export class MaterialModule{ }
