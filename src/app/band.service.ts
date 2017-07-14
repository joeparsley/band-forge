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
    return this.database.object('bands/' + bandsId);
  }

  addBand(newBand: Bands) {
    this.bands.push(newBand);
  }

  updateBand(localUpdatedBand){
    var bandEntryInFirebase = this.getBandsById(localUpdatedBand.$key);
    bandEntryInFirebase.update({title: localUpdatedBand.title,
                                description: localUpdatedBand.description,
                                members: localUpdatedBand.members,
                                guitar: localUpdatedBand.guitar,
                                bass: localUpdatedBand.bass,
                                drums: localUpdatedBand.drums,
                                guitarTwo: localUpdatedBand.guitarTwo});
  }


  deleteBand(localBandToDelete){
   var bandEntryInFirebase = this.getBandsById(localBandToDelete.$key);
   bandEntryInFirebase.remove();
 }
}
