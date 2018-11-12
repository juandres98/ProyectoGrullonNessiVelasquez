import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Platosinterface } from '../Models/PlatosInterface';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

/*export interface Item { name: string; }*/

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
    this.PlatosCollection= afs.collection<Platosinterface>('platos');
    this.platos = this.PlatosCollection.snapshotChanges().pipe(map(actions => actions.map(a =>{
      const data=a.payload.doc.data() as Platosinterface;
      const id=a.payload.doc.id;
      return {id, ...data};
    })));
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

   deletePlato(platos: Platosinterface){
    this.platosDoc=this.afs.doc(`platos/${platos.id}`);
    this.platosDoc.delete();
   }

   updatePlato(platos: Platosinterface){
    this.platosDoc=this.afs.doc(`platos/${platos.id}`);
    this.platosDoc.update(platos);
   }
}
