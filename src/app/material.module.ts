import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatGridListModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatToolbarModule,
  ],
  exports: [
    MatButtonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatToolbarModule,
  ]
})
export class MaterialModule {}
