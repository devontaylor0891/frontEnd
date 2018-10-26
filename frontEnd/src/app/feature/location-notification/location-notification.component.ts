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
      lat: number;
      lng: number;
    city: string;
    province: string;
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
    currentLocation: any;

    getLoggedInSub: Subscription;
    isLoggedIn: boolean;
    getUserSub: Subscription;
    user: any;
  
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
                    this.user = result;
                  }
                );
            } else {
              // user is not logged in
              this.onLogin('notification-manager');
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
      this.locationNotificationArray.push(this.currentLocation);
    }
  
    toggleLocationSearch() {
      this.locationSearchDisplay = !this.locationSearchDisplay;
    };
  
    // resizeMap() {
    //   this.agmMap.triggerResize();
    // };
  
    onSubmit() {
      this.submitting = true;
      this.apiService.addLocationNotifications(this.user.id, this.locationNotificationArray)
        .subscribe(
          res => this.handleSubmitSuccess(res),
          err => this.handleSubmitError(err)
        );
    };
  
    private fillAddress(place) {
      this.parseAddressComponents(place.address_components);
      this.lat = place.geometry.location.lat();
      this.lng = place.geometry.location.lng();
      this.currentLocation = {
        'lat': this.lat,
        'lng': this.lng,
        'city': this.city,
        'province': this.province
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
      this.activeModal.close();
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