import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/module/client';
import { RendezvousService } from 'src/app/services/rendezvous.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Rendezvous } from 'src/app/module/rendezvous';
import { map } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-createrendezvous',
  templateUrl: './createrendezvous.component.html',
  styleUrls: ['./createrendezvous.component.scss']
})
export class CreaterendezvousComponent implements OnInit {

  public listeClients:any;
  form:FormGroup;

  constructor(private rs: RendezvousService,public fb:FormBuilder,private toastr: ToastrService) {
   
    this.form = fb.group({
      
      client: new FormControl(),


      date: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
      ]),
      heur: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5)
      ])
    });
    this.getClients();
   }

  ngOnInit() {
  }
  creerrendezvous(){
    let data = this.form.value;
    let sclient:Client=new Client();

    this.listeClients.forEach(e => {
      if(e.cin==data.client){
        sclient=e;
       


      }
    });
    this.toastr.success("rendezvos ajouté.");
     this.rs.creerRendezvous(new Rendezvous(null,sclient,data.date,data.heur));
     this.form.reset();
    
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

}
