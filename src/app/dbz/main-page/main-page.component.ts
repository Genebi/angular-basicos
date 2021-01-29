import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  @Input() personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 9000
    }
  ];

  nuevo: Personaje = {
    nombre: 'Gohan',
    poder: 25000
  }

  agregarNuevoPersonaje(personaje: Personaje) {

    this.personajes.push(personaje);
  }
}
