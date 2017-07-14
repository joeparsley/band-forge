import { Injectable } from '@angular/core';

import { Bands } from './bands.model';
import { BANDS } from './mock-bands';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BandService {
  bands: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
     this.bands = database.list('bands');
  }

  getBands() {
    return this.bands;
  }


  getBandsById(bandsId: number) {

  }

  addBand(newBand: Bands) {
    this.bands.push(newBand);
  }

}
