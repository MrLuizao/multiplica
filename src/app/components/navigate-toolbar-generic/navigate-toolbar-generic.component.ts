import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigate-toolbar-generic',
  templateUrl: './navigate-toolbar-generic.component.html',
  styleUrls: ['./navigate-toolbar-generic.component.scss'],
})
export class NavigateToolbarGenericComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {}

  navigateBack(){
   this.router.navigate(['home'])
  }

}
