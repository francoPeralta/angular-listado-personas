import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';


@Injectable()
export class PersonasService{
    personas: Persona[] = [ 
        new Persona('Juan','Perez'), 
        new Persona('Franco', 'Peralta'), 
        new Persona('Oscar', 'Di Nicola')
    ];

    saludar = new EventEmitter<number>();

    constructor(private loggingService: LoggingService){}

    agregarPersona(persona: Persona){
        this.loggingService.enviarMensajeAConsola("agregamos un servicio dentro de otro");
        this.personas.push(persona);
    }
}