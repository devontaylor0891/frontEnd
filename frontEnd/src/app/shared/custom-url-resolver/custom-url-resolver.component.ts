import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-custom-url-resolver',
  templateUrl: './custom-url-resolver.component.html',
  styleUrls: ['./custom-url-resolver.component.scss']
})
export class CustomUrlResolverComponent implements OnInit {

  routeParam: any;
  resolvedRoute: any;
  idSub: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private apiService: ApiService) { }

  ngOnInit() { 

    // get the route param
    this.routeParam = this.route.snapshot.paramMap.get('customUrl');
    console.log('routeParam passed in: ', this.routeParam);
    // if it is 'not-found', nav to not-found
    if (this.routeParam === 'not-found') {
      this.router.navigateByUrl('/not-found');
    } else { // else send it to the api to return the producer id to use to navigate
      this.idSub = this.apiService.getProducerIdByCustomUrl(this.routeParam)
        .subscribe(
          result => {
            console.log('result: ', result);
            if (!result[0]) {
              this.navigateToNotFound();
            } else {
              this.resolvedRoute = result;
              this.routeParam = this.routeParam.toLowerCase();
              console.log('resolved Route: ', this.resolvedRoute);
              this.navigateToProducerPage(this.resolvedRoute);
            }            
          }
        );
    };
    

  }

  navigateToProducerPage(id) {
    this.router.navigateByUrl('/producer/' + id);
  };

  navigateToNotFound() {
    this.router.navigateByUrl('not-found');
  }

}
