import { Injectable } from '@angular/core';

import { Bands } from './bands.model';
import { BANDS } from './mock-bands';

@Injectable()
export class BandService {

  constructor() { }

  getBands() {
    return BANDS;
  }


  getBandsById(bandsId: number) {
    for (var i = 0; i <= BANDS.length -1; i++) {
      if (BANDS[i].id === bandsId){
        return BANDS[i];
      }
    }
  }
}
