import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumeService } from 'src/app/services/consume.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  items: any = [];
  dataBinding: any = [];

  constructor( private router: Router, private consumeSrv: ConsumeService ) { }

  ngOnInit() {

    this.consumeSrv.getDataFromFirebase().subscribe( (resp)=>{
      console.log('resp', resp);

      this.items = resp;
    })

  }

  openTapItem(idParam: number){

    this.dataBinding = this.items.filter(item => item.id === idParam)
    console.log('this.dataToSend',this.dataBinding);
 
    this.consumeSrv.bindingObjectData(this.dataBinding);

    this.router.navigate(['details']);

  }

}
