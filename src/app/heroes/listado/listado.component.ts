import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  public heroes: string[] = ['IronMan', 'Thor', 'Hulk', 'Hawkeye', 'Captain America'];
  public eliminado: string = '';
  public mostrar: boolean = false;


  borrar() {
    
    this.eliminado = this.heroes.shift() || '';

    if (this.eliminado.length > 0) {

      this.mostrar = true;
    
    } else {
      
      this.mostrar = false;
    }
  }
}
