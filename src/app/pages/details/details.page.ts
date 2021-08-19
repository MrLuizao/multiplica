import { Component, OnInit } from '@angular/core';
import { ConsumeService } from 'src/app/services/consume.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  data: any;
  constructor( private consumeSrv: ConsumeService ) { }

  ngOnInit() {

    this.consumeSrv.$getObjectSource.subscribe( (resp: any) =>{
      console.log('data', resp[0]);
      this.data = resp[0];
    }).unsubscribe();
  }

}
