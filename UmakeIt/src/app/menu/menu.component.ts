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
    
  }
  
  item:Platosinterface[];
  editState: boolean=false;
  platoEdit: Platosinterface;
  clearState: boolean;


  

  constructor(private conexion:ConexionService) {
    /*this.conexion.listaItem().subscribe(item=>{
      this.items=item;
      console.log(this.items);
    })*/
  }

  ngOnInit() {
    this.conexion.getPlatos().subscribe(item=>{
      this.item=item;
      console.log(item);
    
    

    })
  }

  agregar(myform:NgForm){
    this.conexion.addPlato(this.platos);
    this.platos.nombre= '';
    this.platos.precio=0;
    
  }

  editPlato(event, plato:Platosinterface){
    this.editState=true;
    this.platoEdit=plato;
  }

  updatePlato(platos: Platosinterface){
    this.conexion.updatePlato(platos);
  }

  deletePlato(event, platos:Platosinterface){
    this.conexion.deletePlato(platos);
  }

}
