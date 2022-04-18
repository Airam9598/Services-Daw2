import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {
  mensaje:string;
  private EnviarMensaje=new Subject<string>();
  EnviarMensajeObservable=this.EnviarMensaje.asObservable();
  constructor() { }
  enviarMensaje(mensaje:string){
    this.mensaje=mensaje;
    this.EnviarMensaje.next(mensaje);
  }
}
