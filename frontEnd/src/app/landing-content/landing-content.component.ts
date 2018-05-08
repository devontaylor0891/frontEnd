import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.scss']
})
export class LandingContentComponent implements OnInit {

  pageTitle = 'Onlylocalfood - Good, local food online';

  constructor(private title: Title) { }

  ngOnInit() {

    this.title.setTitle(this.pageTitle);

  }

}
