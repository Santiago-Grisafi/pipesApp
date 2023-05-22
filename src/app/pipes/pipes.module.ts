import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotcommonpipesComponent } from './notcommonpipes/notcommonpipes.component';
import { NgPrimeModuleModule } from '../ng-prime-module/ng-prime-module.module';
import { WordsComponent } from './words/words.component';
import { NumbersComponent } from './numbers/numbers.component';
import { DatesComponent } from './dates/dates.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { CustomPipesModule } from '../customPipes/custompipe.module';
import { OrderArrayPipe } from '../customPipes/order-array.pipe';

@NgModule({
  declarations: [
    NotcommonpipesComponent,
    WordsComponent,
    NumbersComponent,
    DatesComponent,
    CustomPipesComponent,
  ],
  exports: [
    NotcommonpipesComponent,
    WordsComponent,
    DatesComponent,
    NumbersComponent,
    CustomPipesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgPrimeModuleModule,
    CustomPipesModule
  ]
})
export class PipesModule { }
