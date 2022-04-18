import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../comunication.service';

@Component({
  selector: 'app-padrecomponenet',
  templateUrl: './padrecomponenet.component.html',
  styleUrls: ['./padrecomponenet.component.css']
})
export class PadrecomponenetComponent implements OnInit {

  mensaje:string;
  constructor(private servicioComunicacion:ComunicationService) { 

  }

  ngOnInit(): void {
    this.servicioComunicacion.EnviarMensajeObservable.subscribe(mensaje=>{
      this.mensaje=mensaje;
    })
  }

  cambioTexto(event: Event){
    const target = event.target as HTMLTextAreaElement;
    this.servicioComunicacion.enviarMensaje(target.value);
  }

}
