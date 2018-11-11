import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Platosinterface } from '../Models/PlatosInterface';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

export interface Item { name: string; }

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  PlatosCollection: AngularFirestoreCollection<Platosinterface>;
  platos: Observable<Platosinterface[]>;
  platosDoc: AngularFirestoreDocument<Platosinterface>;

 /* private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;*/

  constructor(private afs: AngularFirestore) {
   /* this.itemsCollection = afs.collection<Item>('platos');
    this.items = this.itemsCollection.valueChanges();*/
    this.platos= afs.collection('platos').valueChanges();
   }

   getPlatos(){
     return this.platos;
   }

   /*listaItem(){
     return this.items;
   }*/

   addPlato(platos: Platosinterface){
     this.PlatosCollection.add(platos);

   }

   deletePlato(){

   }

   updatePlato(){
     
   }
}
