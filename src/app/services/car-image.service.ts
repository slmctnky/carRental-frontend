import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from '../common/globalConstants';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  newPath:string= GlobalConstants.apiURL+"carimages/getbycarid?carid=";
  constructor(private httpClient:HttpClient) { }
  getCarImages(carId:number):Observable<ListResponseModel<CarImage>>{

    //https://localhost:44352/api/carimages/getbycarid?carId=3
    return this.httpClient.get<ListResponseModel<CarImage>>(this.newPath+carId);
  }
  addImages(formData:FormData){
    // this.httpClient.post('https://localhost:5001/api/upload', formData, {reportProgress: true, observe: 'events'})
    //   .subscribe(event => {
    //     if (event.type === HttpEventType.UploadProgress)
    //       this.progress = Math.round(100 * event.loaded / event.total);
    //     else if (event.type === HttpEventType.Response) {
    //       this.message = 'Upload success.';
    //       this.onUploadFinished.emit(event.body);
    //     }
    //   });
  }
}
