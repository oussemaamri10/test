import { Component, OnInit } from '@angular/core';
import { RendezvousService } from 'src/app/services/rendezvous.service';
import { Client } from 'src/app/module/client';
import { Rendezvous } from 'src/app/module/rendezvous';
import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.scss']
})
export class RendezvousComponent implements OnInit {

  public listeRendezvous:any;

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
    this.getRendezvous();
  }

  getRendezvous(){
    this.rs.getRendezvous().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(c => {
      this.listeRendezvous = c;
    });
  }


  delete(rd:Rendezvous):void{
    this.rs.deleteRendezvous(rd);
    this.toastr.error("rendezvous spprimé.");
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

  updateRendezvous(r:Rendezvous){
    let data = this.form.value;
    


    let sclient:Client=new Client();
    this.listeClients.forEach(e => {
      if(e.cin==data.client){
        sclient=e;
       


      }
    });
    
    let rendezvous:Rendezvous=new Rendezvous(r.key,sclient,data.date,data.heur);

    if(data.client==null){rendezvous.client=r.client}
    if(data.date==""){rendezvous.date=r.date}
    if(data.heur==""){rendezvous.heur=r.heur}

    console.log(rendezvous);
    this.toastr.info("rendezvous modifié.");

  this.rs.updateRendezvous(r.key, rendezvous);
  this.form.reset();
  }
 


}
