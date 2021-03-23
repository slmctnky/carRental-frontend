import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListClassStatusService<T> {
  currentModel: T;

  constructor() { }

  setCurrentModel(t:T){
    this.currentModel=t;
  }
  
  getModelClass(t:T){
    if(t==this.currentModel){
      return "list-group-item active"
    }
    else  {
      return "list-group-item"
    }
  }
  getAllModelClass(){
    if(!this.currentModel){
      return "list-group-item active"
    }
    else  {
      return "list-group-item"
    }
  }
  clearCurrentModel(){
    this.currentModel=null as any;
  }
  
}
