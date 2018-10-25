import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {

  platos:any[]=[
      {
        
      }

  ]

  
  

  constructor() {
    console.log('funcionando servicio')
   }
}
