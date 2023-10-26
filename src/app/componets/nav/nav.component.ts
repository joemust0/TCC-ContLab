import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  const btn_menu = document.querySelector(".btn-menu") as HTMLElement;
  const side_bar = document.querySelector(".sidebar") as HTMLElement;

  btn_menu.addEventListener('click', () => {
    side_bar.classList.toggle('expand');
});
}
}
