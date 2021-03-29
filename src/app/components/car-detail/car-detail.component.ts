import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalConstants } from 'src/app/common/globalConstants';
import { Car } from 'src/app/models/car';
import { CarDetailsDto } from 'src/app/models/carDetailsDto';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car: Car;
 
  carDetail: CarDetailsDto;
  images:CarImage[];
  dataLoaded = false;
  imageBasePath =  GlobalConstants.baseURL;

  constructor(private carDetailService:CarDetailService, 
    private carImageService:CarImageService, 
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getCarDetail(params["carId"]);
        this.getImageDetail(params["carId"]);
      }
     
    });
  }

  getCarDetail(carId:number) {
    this.carDetailService.getCarDetails(carId).subscribe((response) => {
      this.carDetail = response.data[0];
      
      //console.log(this.carDetail.carImages);
      this.dataLoaded = true;
    });
  }

   getImageDetail(carId:number) {
     this.carImageService.getCarImages(carId).subscribe((response) => {
       this.images = response.data;
       console.log(this.images);
       this.dataLoaded = true;
     });
   }

  getSliderClassName(index:Number){
    if(index == 0){
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }
  isActiveCarousel(carImageIndex: number): string {
    return carImageIndex == 0 ? 'active' : '';
  }
  // addToRentCart(car:Car){
  //   this.toastrService.success("Added ",car.carDescription + "added to RentCart")
  //   this.rentCartService.addToRentCart(car);
  //   console.log(car);
  // }

}
