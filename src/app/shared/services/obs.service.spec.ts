/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ObsService } from './obs.service';

describe('Service: Obs', () => {
  beforeEach(() => {
    addProviders([ObsService]);
  });

  it('should ...',
    inject([ObsService],
      (service: ObsService) => {
        expect(service).toBeTruthy();
      }));
});
