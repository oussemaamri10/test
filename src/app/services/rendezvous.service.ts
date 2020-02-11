import { Injectable } from '@angular/core';
import { Rendezvous } from '../module/rendezvous';
import { Observable, of } from 'rxjs';
import { Client } from '../module/client';
import{AngularFireDatabase,AngularFireList} from 'angularfire2/database'


@Injectable({
  providedIn: 'root'
})
export class RendezvousService {

  listclients:AngularFireList<any>;


  listRendezvous:AngularFireList<any>;


  constructor(private firebase:AngularFireDatabase) { 
    this.listclients=this.firebase.list('clients');
    this.listRendezvous=this.firebase.list('rendezvous');

  }

  
 
  getRendezvous():AngularFireList<Rendezvous> {
  
   return this.listRendezvous;

  }


  getClients(): AngularFireList<Client> {
    return this.listclients;
  }



  deleteRendezvous(rd:Rendezvous){return this.listRendezvous.remove(rd.key);}

  deleteClient(cl:Client){return this.listclients.remove(cl.key);}
    

      creerRendezvous(rendezvous:Rendezvous){
        this.listRendezvous.push(rendezvous);
      }

      creerClients(client:Client){
        this.listclients.push(client);
      }



      updateclient(key: string, value: any): Promise<void> {
        return this.listclients.update(key, value);
      }

      updateRendezvous(key: string, value: any): Promise<void> {
        return this.listRendezvous.update(key, value);
      }


}
