import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipesModule } from './pipes/pipes.module';
import { AppRoutingModule } from './app-routing.module';
import { NgPrimeModuleModule } from './ng-prime-module/ng-prime-module.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PipesModule,
    AppRoutingModule,
    NgPrimeModuleModule,
    SharedModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
