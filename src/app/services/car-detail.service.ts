import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from '../common/globalConstants';
import { CarDetailsDto } from '../models/carDetailsDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  constructor(private httpClient:HttpClient) { }

  getCarDetails(carId:number):Observable<ListResponseModel<CarDetailsDto>>{
    let newPath=GlobalConstants.apiURL+"cars/getbyidwihtdetail?carid="+carId;
    console.log(newPath)
    return this.getHttpClientGet(newPath);

  }

  getHttpClientGet(newPath:string){
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }
}
