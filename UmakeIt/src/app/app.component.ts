import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  platos: Observable<any[]>;
  constructor(db: AngularFirestore) {
  this.platos = db.collection('platos').valueChanges();
}
}
