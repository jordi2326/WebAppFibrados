import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router} from "@angular/router";
import { VariablesglobalesService } from '../../services/variablesglobales.service';

@Component({
  selector: 'app-mensages',
  templateUrl: './mensages.component.html',
  styleUrls: ['./mensages.component.css']
})
export class MensagesComponent implements OnInit {
  titulo = "casa";
  mensage = VariablesglobalesService.mensages;
  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id == 1){
      console.log(VariablesglobalesService.casa)

    }
    this.mensage.body.push({name :'jordi' , text :'hola' });
  }
  addMensajes(event){
    event.preventDefault()
    const target = event.target
    const text =target.querySelector('#texto').value
    console.log(text)
    this.mensage.body.push({name :'jordi' , text :text });

    

  }
}
