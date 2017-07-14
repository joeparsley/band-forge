import { Component, OnInit } from '@angular/core';
import { Bands } from '../bands.model';
import { Router } from '@angular/router';
import { BandService} from '../band.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css'],
  providers: [BandService]
})
export class BandsComponent implements OnInit  {
  bands: FirebaseListObservable<any[]>;

   constructor(private router: Router, private bandService: BandService){}

   ngOnInit(){
     this.bands = this.bandService.getBands();
   }


  goToDetailPage(clickedBand: Bands) {

   };


}
