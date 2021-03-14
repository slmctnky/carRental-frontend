import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetailsDto } from '../models/carDetailsDto';
import { Car } from '../models/car';
import { GlobalConstants } from '../common/globalConstants';

@Injectable({
  providedIn: 'root'
})
export class CarService {


  constructor(private httpClient:HttpClient) { }
  getCars():Observable<ListResponseModel<Car>>{
    let newPath=GlobalConstants.apiURL+"/cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);

  }
  getCarDetails():Observable<ListResponseModel<CarDetailsDto>>{
    let newPath=GlobalConstants.apiURL+"/cars/getdetails";
    return this.getHttpClientGet(newPath);

  }
  getCarsByColors(colorId:number):Observable<ListResponseModel<CarDetailsDto>>{
    let newPath=GlobalConstants.apiURL+"/cars/getwithcolor?colorId="+colorId;
    return this.getHttpClientGet(newPath);
  }
  getCarsByBrands(brandId:number):Observable<ListResponseModel<CarDetailsDto>>{
    let newPath=GlobalConstants.apiURL+"/cars/getwithbrand?brandId="+brandId;
    return this.getHttpClientGet(newPath);
  }
  getHttpClientGet(newPath:string){
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }
}