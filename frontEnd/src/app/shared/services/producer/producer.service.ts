import { Injectable } from '@angular/core';

import { ProducerAdmin } from '../../models/producer-admin.model';

@Injectable()
export class ProducerService {
    
    //this will be where a getAll() method is called, to populate this array
    producersAdmin: ProducerAdmin[] = [
        new ProducerAdmin(
          4,
          'Garden Farms',
          'Moosomin',
          'SK',
          'This is a description',
          'email@email.com',
          'beet.png',
          444,
          555,
          'Devon',
          'Jan 1 2017'
        ),
        new ProducerAdmin(
          4,
          'Garden Farms',
          'Moosomin',
          'SK',
          'This is a description',
          'email@email.com',
          'beet.png',
          444,
          555,
          'Devon',
          'Jan 1 2017'
        )
    ];

  constructor() { }

}
