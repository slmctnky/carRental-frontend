import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../common/globalConstants';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  
  constructor(private httpClient:HttpClient) { }

  getColors(){
    let newPath=GlobalConstants.apiURL+"colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath);

  }
}
