import { 
    Component, 
    OnInit, 
    Input, 
    OnChanges, 
    NgZone, 
    ViewChild, 
    ElementRef, 
    OnDestroy, 
    Output, 
    EventEmitter
  } from '@angular/core';// Avoid name not found warnings
  
import { Router } from '@angular/router';
// import { } from 'googlemaps';
// import { google } from '@google/maps';
// Avoid name not found warnings
// declare const google: any;

import { MapsAPILoader, MouseEvent } from '@agm/core';
// import { AgmMap } from '@agm/core';
import { Subscription } from 'rxjs/Subscription';

import { 
  FormGroup, 
  FormBuilder, 
  Validators, 
  FormControl 
} from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from '../../core/api.service';
import { UserService } from '../../core/services/user/user.service';
import { AuthService } from '../../auth/auth.service';

// just an interface for type safety.
interface marker {
  id?: number;
  lat: number;
  lng: number;
  city: string;
  province: string;
  dateAdded: string;
}

@Component({
  selector: 'app-location-notification',
  templateUrl: './location-notification.component.html',
  styleUrls: ['./location-notification.component.scss']
})
export class LocationNotificationComponent implements OnInit, OnChanges, OnDestroy {
  
    locationSearchDisplay: boolean = false;
    public searchControl: FormControl;
    public zoom: number;
    @ViewChild('search') public searchElementRef: ElementRef;
    // @ViewChild(AgmMap) public agmMap: AgmMap;
    lat: number = 50.0756;
    lng: number = -101.5130;
    city: string;
    province: string;
    submitting: boolean = false;
    error: any;
    @Output() accountEdited = new EventEmitter<boolean>();

    locationNotificationArray: marker[] = [];
    currentLocationsArray: marker[] = [];
    locationsToDisplay: marker[] = [];
    locationsToDelete: marker[] = [];
    locationsToAdd: marker[] = [];

    currentLocation: any;

    getLoggedInSub: Subscription;
    isLoggedIn: boolean;
    getUserSub: Subscription;
    user: any;
    getLocationNotificationsSub: Subscription;
  
    constructor(private authService: AuthService,
                private userService: UserService,
                private fb: FormBuilder,
                public activeModal: NgbActiveModal,
                private apiService: ApiService,
                private mapsAPILoader: MapsAPILoader,
                private ngZone: NgZone,
                private router: Router) { }
  
    ngOnChanges() {};
  
    ngOnInit() {
      
      // ***** LOCATION INIT CODE ******
      // set google maps defaults
      this.zoom = 8;
      
      // create search FormControl
      this.searchControl = new FormControl();
  
      // set current position
      // this.setCurrentPosition();
  
      // load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          types: ["geocode"]
        });
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            // get the place result
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
            // verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
  
            console.log('place: ', place);
            this.fillAddress(place);
  
          });
        });
      });

      this.getLoggedInSub = this.authService.getLoggedIn()
        .subscribe(
          result => {
            this.isLoggedIn = result;
            if(this.isLoggedIn) {
              this.getUserSub = this.userService.getUser()
                .subscribe(
                  result => {
                    console.log('userRecieved: ', result);
                    this.user = result;
                    if (this.user) {
                      this.getLocationNotificationsSub = this.apiService.getLocationNotifications(result.id)
                        .subscribe(
                          result => {
                            // this.locationNotificationArray = result;
                            this.currentLocationsArray = result;
                            this.locationsToDisplay = result;
                            console.log('locations received: ', this.locationNotificationArray);
                          }
                        )
                    }
                  }
                );
            } else {
              // user is not logged in
              this.onLogin('location-notification');
            };
          }
        );
  
    };

    onLogin(e) {
      console.log('cart stored from checkout');
      this.authService.login(e);
      e.preventDefault();
    }
  
    onAddLocation() {
      this.locationsToDisplay.push(this.currentLocation);
      this.locationsToAdd.push(this.currentLocation);
      // this.locationNotificationArray.push(this.currentLocation);  
      console.log('locations after add: ', this.locationsToDisplay);
      console.log('locations to add: ', this.locationsToAdd);
    }

    onRemoveLocation(index) {
      if (this.locationsToDisplay[index].id) {
        console.log('location in database: ', this.locationsToDisplay[index].id);
        this.locationsToDelete.push(this.locationsToDisplay[index]);
        console.log('locationsTodelete: ', this.locationsToDelete);
      }
      this.locationsToDisplay.splice(index, 1);
      console.log('locations after remove: ', this.locationsToDisplay);
    }
  
    toggleLocationSearch() {
      this.locationSearchDisplay = !this.locationSearchDisplay;
    };
  
    // resizeMap() {
    //   this.agmMap.triggerResize();
    // };
  
    onSubmit() {
      this.submitting = true;
       // if locations to add and delete
      if (this.locationsToAdd.length > 0 && this.locationsToDelete.length > 0) {
        // start by looping over those to add
        for (let i = 0; i < this.locationsToAdd.length; i++) {
          this.apiService.addLocationNotifications(this.user.id, this.locationsToAdd[i])
            .subscribe(
              res => {
                console.log('location sent: ', i);
                if (i === this.locationsToAdd.length - 1) {
                  console.log('additions complete');
                  // when done, loop over locations to delete
                  for (let j = 0; j < this.locationsToDelete.length; j++) {
                    console.log('location to delete: ', this.locationsToDelete[j].id);
                    this.apiService.deleteLocationNotifications(this.user.id, this.locationsToDelete[j].id)
                      .subscribe(
                        res => {
                          if (j === this.locationsToDelete.length - 1) {
                            console.log('all locations deleted');
                            this.handleSubmitSuccess(res)
                          } 
                        },
                        err => this.handleSubmitError(err)
                      )
                  }
                }
              },
              err => this.handleSubmitError(err)
            );
        }
      }
      // if locations to add only
      if (this.locationsToAdd.length > 0 && this.locationsToDelete.length < 1) {
        for (let i = 0; i < this.locationsToAdd.length; i++) {
          this.apiService.addLocationNotifications(this.user.id, this.locationsToAdd[i])
            .subscribe(
              res => {
                console.log('location sent: ', i);
                if (i === this.locationsToAdd.length - 1) {
                  this.handleSubmitSuccess(res)
                }
              },
              err => this.handleSubmitError(err)
            );
        }
      }
      // if locations to delete only
      if (this.locationsToAdd.length < 1 && this.locationsToDelete.length > 0) {
        for (let j = 0; j < this.locationsToDelete.length; j++) {
          console.log('location to delete: ', this.locationsToDelete[j].id);
          this.apiService.deleteLocationNotifications(this.user.id, this.locationsToDelete[j].id)
            .subscribe(
              res => {
                if (j === this.locationsToDelete.length - 1) {
                  console.log('all locations deleted');
                  this.handleSubmitSuccess(res)
                } 
              },
              err => this.handleSubmitError(err)
            )
        }
      }


      
      // this.apiService.addLocationNotifications(this.user.id, this.locationNotificationArray)
      //   .subscribe(
      //     res => this.handleSubmitSuccess(res),
      //     err => this.handleSubmitError(err)
      //   );
    };
  
    private fillAddress(place) {
      this.parseAddressComponents(place.address_components);
      this.lat = place.geometry.location.lat();
      this.lng = place.geometry.location.lng();
      this.currentLocation = {
        'id': null,
        'lat': this.lat,
        'lng': this.lng,
        'city': this.city,
        'province': this.province,
        'dateAdded': new Date().toISOString()
      };
    };
  
    private parseAddressComponents(components) {
      for (let i = 0; i < components.length; i++) {
        let types = components[i].types;
        for (let j = 0; j < types.length; j++) {
          let result = types[j];
          if (result === 'locality' || result === 'sublocality') {
            this.city = components[i].short_name;
            console.log('city: ', this.city);
          }
          if (result === 'administrative_area_level_1') {
            this.province = components[i].short_name;
          }
        }
      }
    };
  
    handleSubmitSuccess(result) {
      this.submitting = false;
      console.log('locations submitted: ', result);
      this.router.navigateByUrl('/');
    };
  
    handleSubmitError(err) {
      console.error(err);
      this.submitting = false;
      this.error = true;
    };
  
    ngOnDestroy() {
      if(this.getLoggedInSub) {
        this.getLoggedInSub.unsubscribe();
      };
      if(this.getUserSub) {
        this.getUserSub.unsubscribe();
      };
    };
  
  
  }