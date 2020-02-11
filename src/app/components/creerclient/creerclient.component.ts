import { Component, OnInit } from '@angular/core';
import { RendezvousService } from 'src/app/services/rendezvous.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Client } from 'src/app/module/client';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-creerclient',
  templateUrl: './creerclient.component.html',
  styleUrls: ['./creerclient.component.scss']
})
export class CreerclientComponent implements OnInit {

  form:FormGroup;

  constructor(public fb:FormBuilder, private rds:RendezvousService,private toastr: ToastrService) {
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
    
  }

  creerclient(){
    let data = this.form.value;
    this.rds.creerClients(new Client(null,data.nom,data.prenom,parseInt(data.telephone),parseInt(data.cin)));
    this.toastr.success("client ajouté.");
    this.form.reset();
    
  }

}
