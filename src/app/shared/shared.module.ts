import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgPrimeModuleModule } from '../ng-prime-module/ng-prime-module.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModuleModule
  ],
  exports:[
    NavbarComponent,
  ]
})
export class SharedModule { }
