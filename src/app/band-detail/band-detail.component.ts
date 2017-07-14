import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Bands } from '../bands.model';
import { BandService} from '../band.service';


@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.css'],
  providers: [BandService]
})
export class BandDetailComponent implements OnInit {
  bandsId: number;
  bandToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private bandService: BandService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.bandsId = parseInt(urlParameters['id']);
   });
   this.bandToDisplay = this.bandService.getBandsById(this.bandsId);
  }

}
