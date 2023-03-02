import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { HomePageRoutingModule } from './home-routing.module';
import { LabelModule } from "@progress/kendo-angular-label";
import { ButtonsModule } from "@progress/kendo-angular-buttons"
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { IconsModule } from "@progress/kendo-angular-icons";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    DateInputsModule,
    DropDownsModule,
    IconsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
