import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtopic',
  templateUrl: './addtopic.component.html',
  styleUrls: ['./addtopic.component.css']
})
export class AddtopicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addTopic(event){
    event.preventDefault()
    const target = event.target
    const titulo =target.querySelector('#titulo').value
    const text =target.querySelector('#mensage').value

    console.log(text,titulo)
  }
    
}
