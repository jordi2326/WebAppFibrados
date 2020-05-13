import { Injectable } from '@angular/core';

@Injectable()
export class VariablesglobalesService {
   token:string ; 
   users: any[] = [];
    public  mensages = {titulo :'No me acuerdo', body : [{name :'Jordi' , text:'Esta rutina me gusta mucho' },{name:'Antonio', text : 'Bomba'}] };
   public static  casa : string = "hola";
    constructor() { }

  settoken(token){
    this.token = token ; 
  }
    addmensage(nombre:string , text:string){
      this.mensages.body.push({name :nombre , text :text });

    }  

    getMensages(){
      return this.mensages;
    }

}
