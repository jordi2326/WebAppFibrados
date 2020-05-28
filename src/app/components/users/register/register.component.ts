import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  

})
export class RegisterComponent implements OnInit {
  emailwrong  = false;
  passwordcorta = false ; 
  namecorta = false;
  selectmal = false;
  usuarioexistente = false;
  faltancampos = false;

  constructor(private Auth: AuthService,
              private router: Router, 
              private cookieService: CookieService, 
              private api: HttpClient) {
   }

  ngOnInit(): void {
  }

  RegisterUser(event){
    this.faltancampos=this.namecorta=this.selectmal=this.usuarioexistente=false
    event.preventDefault()
    const target = event.target
    const password=target.querySelector('#password').value
    const name = target.querySelector('#name').value
    const email = target.querySelector('#email').value
    const privacidad = target.querySelector('#privacidad').value

    console.log(password, name, email, privacidad)
    this.validarEmail(email);

   if (privacidad == "Privacidad de la cuenta :Privada/Publica") this.selectmal=true
   if (password.length < 5) this.passwordcorta = true;
   if (password=="" || name == "" ||
      email=="" || privacidad=="Privacidad de la cuenta :Privada/Publica")  this.faltancampos=true;

  if (this.faltancampos == false && this.emailwrong == false) 
    this.Auth.register(name,password,email,privacidad).subscribe(resp => {
    // display its headers
    console.log(resp)
   }, error=>{
     console.log('usuario existente')
     console.log(error.status)
   });
  }

  validarEmail(valor) {
   let  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
   if (!emailRegex.test(valor)) this.emailwrong=true;
  }
}
