import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-learn-more-consumer',
  templateUrl: './learn-more-consumer.component.html',
  styleUrls: ['./learn-more-consumer.component.scss']
})
export class LearnMoreConsumerComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {

    this.title.setTitle('Discover how Onlylocalfood.com works!');

  }

}
