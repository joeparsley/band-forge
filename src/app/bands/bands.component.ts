import { Component, OnInit } from '@angular/core';
import { Bands } from '../bands.model';
import { Router } from '@angular/router';
import { BandService} from '../band.service';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css'],
  providers: [BandService]
})
export class BandsComponent implements OnInit  {
  bands: Bands[];
   constructor(private router: Router, private bandService: BandService){}

   ngOnInit(){
     this.bands = this.bandService.getBands();
   }


  goToDetailPage(clickedBand: Bands) {
     this.router.navigate(['bands', clickedBand.id]);
   };


}
