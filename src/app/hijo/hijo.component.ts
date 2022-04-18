import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../comunication.service';
@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  mensaje:string;
  constructor(private servicioComunicacion:ComunicationService) { 

  }

  ngOnInit(): void {
    this.servicioComunicacion.EnviarMensajeObservable.subscribe(mensaje=>{
      this.mensaje=btoa(mensaje);;
    })
  }

  cambioTexto(event: Event){
    const target = event.target as HTMLTextAreaElement;
    this.servicioComunicacion.enviarMensaje(target.value);
  }

}
