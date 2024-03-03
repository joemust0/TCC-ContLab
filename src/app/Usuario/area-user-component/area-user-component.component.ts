import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-user-component',
  templateUrl: './area-user-component.component.html',
  styleUrls: ['./area-user-component.component.css']
})
export class AreaUserComponentComponent implements OnInit {

constructor(private router:Router){}

ngOnInit(): void {}

Edit(){

  return this.router.navigate(['/editUser']);
}

}
