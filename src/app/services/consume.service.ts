import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class ConsumeService {
  
  objectSource = new BehaviorSubject<{}>({});
  public $getObjectSource = this.objectSource.asObservable();

  constructor( private http: HttpClient, private firebase: AngularFirestore) { }
                
 
  getDataFromFirebase() {
    return this.firebase.collection('registers').valueChanges() as Observable<[]>;

  }

  bindingObjectData(data:any){
    this.objectSource.next(data);
  }

}
