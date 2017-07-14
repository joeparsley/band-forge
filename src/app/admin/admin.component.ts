import { Component, OnInit } from '@angular/core';
import { Bands } from '../bands.model';
import { BandService} from '../band.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BandService]
})
export class AdminComponent implements OnInit {

  constructor(private bandService: BandService) { }

  ngOnInit() {
  }

  submitForm(title: string, description: string, members: string, guitar: string, bass: string, drums: string, guitarTwo: string) {
    var newBand: Bands = new Bands(title, description, members, guitar, bass, drums, guitarTwo);
    this.bandService.addBand(newBand);
  }

}
