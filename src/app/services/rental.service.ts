import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../common/globalConstants';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetailDto } from '../models/rentalDetailDto';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient:HttpClient) { }

  getRentalsWithDetail(){
    let newPath=GlobalConstants.apiURL+"rentals/getallwithdetail"
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath);

  }
}
