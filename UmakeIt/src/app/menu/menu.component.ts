import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';
import { Platosinterface } from '../Models/PlatosInterface';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  /*items:any;*/
  platos:Platosinterface={
    nombre:'',
    precio:0
  }

  constructor(private conexion:ConexionService) {
    /*this.conexion.listaItem().subscribe(item=>{
      this.items=item;
      console.log(this.items);
    })*/
  }

  ngOnInit() {
    this.conexion.getPlatos().subscribe(platos=>{
      console.log(platos);
    

    })
  }

  agregar(myform:NgForm){
    this.conexion.addPlato(this.platos);
    this.platos.nombre= '';
    
  }

}
