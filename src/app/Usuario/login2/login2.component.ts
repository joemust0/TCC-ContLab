import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit{


  constructor(private router: Router) { }


  ngOnInit(): void {}

  CadUsuario() {
    return this.router.navigate(['/cadUsuario']);
  }
}

