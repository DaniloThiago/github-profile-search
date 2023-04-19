import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { ProfileModule } from "../profile/profile.module";
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    exports: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ProfileModule,
        HomeRoutingModule,
    ]
})
export class HomeModule { }
