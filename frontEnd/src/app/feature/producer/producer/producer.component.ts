import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProducerService } from '../../../core/services/producer/producer.service';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.scss'],
  providers: [ProducerService]
})
export class ProducerComponent implements OnInit {

  producer: any = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private producerService: ProducerService) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');

    this.producer = this.producerService.getProducerById(id);

    console.log(this.producer);

  }

}
