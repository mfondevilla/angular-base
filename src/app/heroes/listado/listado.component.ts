import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Ironman', 'Venom', 'Hulk', 'DeadPool'];
  heroeBorrado: string = "";

  borrarHeroe() {
    
    this.heroeBorrado = this.heroes.shift() || "";
  //  const index = this.heroes.indexOf('Hulk');
  //  this.heroes.splice(index,1);
  }

}
