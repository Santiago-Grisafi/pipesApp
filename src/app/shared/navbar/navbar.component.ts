import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: "Pipes APP", icon: "pi pi-desktop",
        items: [
          { label: "Numbers", icon: "pi pi-dollar", routerLink: "/number" },
          { label: "Words", icon: "pi pi-align-left", routerLink: "/word" },
          { label: "Dates", icon: "pi pi-tag", routerLink: "/date" },
          { label: "Not Commons", icon: "pi pi-align-right", routerLink: "/notcommon" },
        ]
      },
      { label: "Custom Pipes", icon: "pi pi-building", routerLink: "/custompipes" }
    ];
  }

}
