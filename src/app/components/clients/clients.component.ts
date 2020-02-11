import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/module/client';
import { RendezvousService } from 'src/app/services/rendezvous.service';
import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  public listeClients:any;
  form:FormGroup;

  constructor(public fb:FormBuilder, private rs:RendezvousService,private toastr: ToastrService) {
    this.form = fb.group({
      nom: new FormControl("", [
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      prenom: new FormControl("", [
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      telephone: new FormControl("", [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(8),
        Validators.maxLength(8),
      ]),
      cin: new FormControl("", [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(8),
        Validators.maxLength(8)
      ])
    })
   
   }

  
  ngOnInit() {
    this.getClients();
  }

  getClients(){
    this.rs.getClients().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(c => {
      this.listeClients = c;
    });


  }
  delete(c:Client):void{
    this.rs.deleteClient(c);
    this.toastr.error("client spprimé.");

  }

  updateClient(c:Client){
    let data = this.form.value;
    
    let client:Client=new Client(c.key,data.nom,data.prenom,data.telephone,data.cin);

    if(data.nom==""){client.nom=c.nom}
    if(data.prenom==""){client.prenom=c.prenom}
    if(data.telephone==""){client.tel=c.tel}
    if(data.cin==""){client.cin=c.cin}

    

  this.rs.updateclient(c.key, client);
  this.form.reset();
  this.toastr.info("client modifié.");
    
  }

}
