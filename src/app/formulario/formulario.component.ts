import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [LoggingService]
})
export class FormularioComponent {

  //@Output() personaCreada = new EventEmitter<Persona>(); //esta clase se encarga de crear un mensaje, de poder comunicar la informacion que vamos a agregar en este componente hijo hacia el componente padre
  
  nombreInput: string = '';
  apellidoInput: string = '';
  //@ViewChild('nombreInput') nombreInput: ElementRef;
  //@ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(private loggingService: LoggingService, 
              private personasService: PersonasService){ 
                this.personasService.saludar.subscribe(
                  (indice:number) => alert("El indice es: " + indice)
                );
               }

  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    //this.loggingService.enviarMensajeAConsola("Enviamos persona: " + persona1.nombre + " " + persona1.apellido);
    //this.personaCreada.emit(persona1);
    this.personasService.agregarPersona(persona1);
  }
}
