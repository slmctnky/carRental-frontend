import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../common/globalConstants';
import { CustomerDetailDto } from '../models/customerDetailDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  getCustomersWithDetail(){
    let newPath=GlobalConstants.apiURL+"customers/getallwithdetail"
    return this.httpClient.get<ListResponseModel<CustomerDetailDto>>(newPath);

  }
}
