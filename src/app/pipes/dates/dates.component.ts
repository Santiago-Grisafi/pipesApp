import { Component } from '@angular/core';

import localEs from "@Angular/common/locales/es";
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs);

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent {
  date: Date = new Date();
}
