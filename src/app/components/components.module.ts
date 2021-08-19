import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadColorsComponent } from './head-colors/head-colors.component';
import { FootTabsComponent } from './foot-tabs/foot-tabs.component';
import { ButtonGenericComponent } from './button-generic/button-generic.component';
import { NavigateToolbarGenericComponent } from './navigate-toolbar-generic/navigate-toolbar-generic.component';


@NgModule({
  declarations: [
    HeadColorsComponent,
    FootTabsComponent,
    ButtonGenericComponent,
    NavigateToolbarGenericComponent
  ],
  exports: [
    HeadColorsComponent,
    FootTabsComponent,
    ButtonGenericComponent,
    NavigateToolbarGenericComponent
  ],
  imports: [
    CommonModule
  ],
})
export class ComponentsModule { }
