import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule} from "primeng/button";
import { CardModule} from "primeng/card";
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    TableModule,
    ButtonModule,
    MenubarModule,
    FieldsetModule
  ],
  exports:[
    CardModule,
    TableModule,
    ButtonModule,
    MenubarModule,
  ]
})
export class NgPrimeModuleModule { }
