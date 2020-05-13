import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Temas =[{titulo :'Como mejorar mi rendimiento' , autor:'Jordi' , id:"1" },
        {titulo:'Como mejorar mi resistencia', autor :'BombaNavarro',id:"2"},
        {titulo:'Gimnasios low cost Barcelona' , autor:'Andres',id:"3"} ]

  constructor() { 
  }

  ngOnInit(): void {
  }

}
