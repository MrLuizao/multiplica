import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadColorsComponent } from './head-colors/head-colors.component';
import { FootTabsComponent } from './foot-tabs/foot-tabs.component';


@NgModule({
  declarations: [
    HeadColorsComponent,
    FootTabsComponent
  ],
  exports: [
    HeadColorsComponent,
    FootTabsComponent
  ],
  imports: [
    CommonModule
  ],
})
export class ComponentsModule { }
