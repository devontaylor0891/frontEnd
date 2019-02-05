// // import { Component, OnInit, Input, OnChanges } from '@angular/core';

// // import { ProducerDashboardService } from '../producer-dashboard.service';

// // import { UserModel } from '../../../core/models/user.model';
// // import { ProducerModel } from '../../../core/models/producer.model';

// // @Component({
// //   selector: 'app-producer-dashboard',
// //   templateUrl: './producer-dashboard.component.html',
// //   styleUrls: ['./producer-dashboard.component.scss'],
// //   providers: []
// // })
// // export class ProducerDashboardComponent implements OnInit, OnChanges {

// //   @Input() id: number;
// //   @Input() user: UserModel;
// //   producer: ProducerModel;

// //   ngOnChanges() {};

// //   constructor(private dashboardService: ProducerDashboardService) { }

// //   ngOnInit() {

// //     this.dashboardService.getProducer()
// //       .subscribe(
// //         result => {
// //           this.producer = result;
// //         }
// //       );

// //     this.dashboardService.loadData(this.id);

// //   }

// // }


// import { Component, OnInit, Input, OnChanges } from '@angular/core';

// import { ProducerDashboardService } from '../producer-dashboard.service';
// import { ApiService } from '../../../core/api.service';

// import { UserModel } from '../../../core/models/user.model';
// import { ProducerModel } from '../../../core/models/producer.model';

// @Component({
//   selector: 'app-producer-dashboard',
//   templateUrl: './producer-dashboard.component.html',
//   styleUrls: ['./producer-dashboard.component.scss'],
//   providers: []
// })
// export class ProducerDashboardComponent implements OnInit, OnChanges {

//   @Input() id: number;
//   @Input() user: UserModel;
//   producer: ProducerModel;
//   customUrl: string;

//   ngOnChanges() {};

//   constructor(private dashboardService: ProducerDashboardService,
//               private apiService: ApiService) { }

//   ngOnInit() {

//     this.dashboardService.getProducer()
//       .subscribe(
//         result => {
//           this.producer = result;
//           if (this.producer) {
//             this.apiService.getCustomUrlByProducerId(this.producer.id)
//               .subscribe(
//                 result => {
//                   this.customUrl = result[0].customUrl;
//                 }
//               )
//           } 
//         }
//       );

//     this.dashboardService.loadData(this.id);

//   }

// }

import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { ProducerDashboardService } from '../producer-dashboard.service';
import { ApiService } from '../../../core/api.service';

import { UserModel } from '../../../core/models/user.model';
import { ProducerModel } from '../../../core/models/producer.model';

@Component({
  selector: 'app-producer-dashboard',
  templateUrl: './producer-dashboard.component.html',
  styleUrls: ['./producer-dashboard.component.scss'],
  providers: []
})
export class ProducerDashboardComponent implements OnInit, OnChanges {

  @Input() id: number;
  @Input() user: UserModel;
  producer: ProducerModel;
  customUrlObject: any;

  ngOnChanges() {};

  constructor(private dashboardService: ProducerDashboardService,
              private apiService: ApiService) { }

  ngOnInit() {

    this.dashboardService.getProducer()
      .subscribe(
        result => {
          this.producer = result;
          if (this.producer) {
            console.log('producer id: ', this.producer.id);
            this.apiService.getCustomUrlByProducerId(this.producer.id)
              .subscribe(
                result => {
                  console.log('custom result: ', result);
                  this.customUrlObject = result[0];
                }
              )
          } 
        }
      );

    this.dashboardService.loadData(this.id);

  }

}