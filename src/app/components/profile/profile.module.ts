import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfileComponent } from './profile.component';
import { OrderByPipe } from 'src/app/order-by.pipe';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProfileComponent,
    OrderByPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
