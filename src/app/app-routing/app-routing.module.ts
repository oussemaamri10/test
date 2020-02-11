import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreaterendezvousComponent } from '../components/createrendezvous/createrendezvous.component';
import { ClientsComponent } from '../components/clients/clients.component';
import { RendezvousComponent } from '../components/rendezvous/rendezvous.component';
import { CreerclientComponent } from '../components/creerclient/creerclient.component';

const routes: Routes = [
  {
    path: '',
    component: RendezvousComponent
  },
  {
    path: 'createRendezvous',
    component:CreaterendezvousComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'createClient',
    component: CreerclientComponent
  }
  
]



@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [ RouterModule]
})
export class AppRoutingModule { }
