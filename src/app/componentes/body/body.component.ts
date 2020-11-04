import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  frase: any = {
    mensaje: 'Escucha el silencio, diez millones de años de profundo silencio. Ahora, quejidos y llantos, y no de nacimientos. Eso es lo que traemos, un gran y aplastante peso sobre ustedes, presionándolos, acabando con su juventud y esperanza. No más voluntad, no más libertad, nada más que muerte agonizante y nada bueno vendrá de ella.',
    autor: '-Gravemind'
};

mostrar: boolean;
personajes: string [] = ['Sargento Jhonson', 'Gravemind', 'Cortana'];

constructor(){
  this.mostrar = true;
}


}
