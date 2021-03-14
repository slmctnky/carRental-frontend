import { Component, OnInit } from '@angular/core';
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

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    console.log("geldi")
    this.carService.getCarDetails().subscribe(response=>{
      this.cardetails=response.data
      this.dataLoaded=true;
    })
   
  }

}

