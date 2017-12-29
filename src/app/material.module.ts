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
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {}
