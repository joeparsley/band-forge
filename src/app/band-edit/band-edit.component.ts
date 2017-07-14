import { Component, Input, OnInit } from '@angular/core';
import { Bands } from '../bands.model';
import { BandService} from '../band.service';

@Component({
  selector: 'app-band-edit',
  templateUrl: './band-edit.component.html',
  styleUrls: ['./band-edit.component.css'],
  providers: [BandService]
})
export class BandEditComponent implements OnInit {
  @Input() selectedBands;

  constructor(private bandService: BandService) { }

  ngOnInit() {
  }

  beginUpdatingBand(bandToUpdate){
   this.bandService.updateBand(bandToUpdate);
 }

 beginDeletingBand(bandToDelete){
    if(confirm("Are you sure you want to delete this band from the database?")){
      this.bandService.deleteBand(bandToDelete);
    }
  }

}
