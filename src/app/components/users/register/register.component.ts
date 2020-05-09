import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  

})
export class RegisterComponent implements OnInit {

  constructor(private Auth : AuthService) { }

  ngOnInit(): void {
  }
  RegisterUser(event){
    event.preventDefault()
    const target = event.target
    const email=target.querySelector('#email').value
    const password=target.querySelector('#password').value
    const name = target.querySelector('#name').value

    //this.Auth.getRegisterDetails(email, password,name
    //).subscribe(data => {
     // if(data.success){
          //redirect
     // }
      //else{ 
       // window.alert(data.)
      //}
   // })
   if(password.length <  5  && password != "") window.alert("Contraseña demasiado corta")
   if(  email== "" ||  password=="" || name == "") window.alert("introduzca usuario o  contraseña correcta o nombre")
      console.log(email,password,name)

  }
}
