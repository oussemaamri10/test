import { Client } from './client';

export class Rendezvous {
    constructor(
        public key:string=null,
        public client?:Client,
        public date?:String,
        public heur?:String
        )
        {
    
        }
}
