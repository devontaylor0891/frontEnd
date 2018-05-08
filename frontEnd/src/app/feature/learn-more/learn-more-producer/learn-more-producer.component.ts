import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-learn-more-producer',
  templateUrl: './learn-more-producer.component.html',
  styleUrls: ['./learn-more-producer.component.scss']
})
export class LearnMoreProducerComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {

    this.title.setTitle('Discover how Onlylocalfood.com works!');

  }

}
