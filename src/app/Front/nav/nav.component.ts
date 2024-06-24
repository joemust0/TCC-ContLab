import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  ocultar = true;
  iconOcultar = true;

  constructor() { }

  ngOnInit(): void {

  const btn_menu = document.querySelector(".btn-menu") as HTMLElement;
  const side_bar = document.querySelector(".sidebar") as HTMLElement;

  btn_menu.addEventListener('click', () => {
    side_bar.classList.toggle('expand');

  this.ocultar = !this.ocultar; //Alterar o estado do texto
  this.iconOcultar = !this.iconOcultar; //Alterar o estado do icone
  changebtn();
});
}
}
function changebtn() {
  const side_bar = document.getElementById('side_bar'); // Substitua 'side_bar' pelo ID correto
  const btn_menu = document.getElementById('btn_menu');   // Substitua 'btn_menu' pelo ID correto

  if (side_bar && btn_menu) {
    if (side_bar.classList.contains('expand')) {
      btn_menu.classList.replace('bx bx-menu', 'bx bx-menu-alt-right');
    } else {
      btn_menu.classList.replace('bx bx-menu-alt-right', 'bx bx-menu');
    }
  }
}
