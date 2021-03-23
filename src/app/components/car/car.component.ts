import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetailsDto } from 'src/app/models/carDetailsDto';

import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {


  cars:Car[]=[];
  cardetails:CarDetailsDto[]=[];
  dataLoaded=false;

  constructor(private carService:CarService,
    private activatedRouted:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedRouted.params.subscribe(params=>{
      console.log(params)
      if(params["colorId"]){
        console.log("Color")
        this.getCarsWithColor(params["colorId"])
      }
      else if(params["brandId"]){
        console.log("Brand")
        this.getCarsWithBrand(params["brandId"])
      }
      else{
        console.log("Tüm")
        this.getCars()
      }
    })
   
  }

  getCars(){
    console.log("geldi")
    this.carService.getCarDetails().subscribe(response=>{
      this.cardetails=response.data
      this.dataLoaded=true;
    })
   
  }
  getCarsWithColor(colorId:number){
    this.carService.getCarsByColors(colorId).subscribe(response=>{
      this.cardetails=response.data
      this.dataLoaded=true;
    })
   
  }
  getCarsWithBrand(brandId:number){
    this.carService.getCarsByBrands(brandId).subscribe(response=>{
      this.cardetails=response.data
      this.dataLoaded=true;
    })
   
  }

}

