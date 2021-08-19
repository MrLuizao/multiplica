import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadColorsComponent } from './head-colors/head-colors.component';
import { FootTabsComponent } from './foot-tabs/foot-tabs.component';
import { ButtonGenericComponent } from './button-generic/button-generic.component';


@NgModule({
  declarations: [
    HeadColorsComponent,
    FootTabsComponent,
    ButtonGenericComponent
  ],
  exports: [
    HeadColorsComponent,
    FootTabsComponent,
    ButtonGenericComponent
  ],
  imports: [
    CommonModule
  ],
})
export class ComponentsModule { }
