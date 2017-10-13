import { NgModule } from '@angular/core';

import {
  MatButtonModule,  
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,   
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule
  ]
})
export class MaterialModule {}