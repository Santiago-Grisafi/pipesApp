import { Component, OnInit } from '@angular/core';
import { Person } from "./../../interfaces/person.interface";
import { interval } from 'rxjs';

@Component({
  selector: 'app-notcommonpipes',
  templateUrl: './notcommonpipes.component.html',
  styleUrls: ['./notcommonpipes.component.css']
})
export class NotcommonpipesComponent implements OnInit {

  title: string = "i18nSelect";
  title2: string = "i18nPlural";
  genre: string = "false";
  clients: string[] = ['Geralt', 'Sephiroth', 'Arthas'];

  genreInfo = {
    "false": "Aerith Gainsborough",
    "true": "Sephiroth Crescent",
  }

  clientsMap = {
    "=0": "not clients waiting",
    "other": "# clients waiting...",
  }

  person: Person = {
    name: "Bruce Wayne",
    age: 30,
    genre: true,
    work: "Batman"
  }

  miObserv = interval(1000);

  constructor() {
    this.miObserv.subscribe(console.log);
  }

  ngOnInit(): void {

  }

  changeSex = () => {
    if (this.genre = "false") { return this.genre = "true" }
    if (this.genre = "true") { return this.genre = "false" };
    return this.genre;
  };

  deleteClient = () => {
    return this.clients.pop();
  }

  promise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Inicio de pruebas');
      }, 3000)
    })
  }


}
