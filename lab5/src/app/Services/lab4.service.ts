import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Lab4Service {

  constructor(private readonly myClient:HttpClient) { }
  private readonly Base_URL = "http://localhost:3000/students";
  GetAllUsers(){
    return this.myClient.get(this.Base_URL);
  }
  GetUserByID(id:any){
    return this.myClient.get(this.Base_URL+"/"+id);
  }

  updateUser(id: any, data: any) {
    return this.myClient.put(this.Base_URL + '/' + id, data);
  }

  deleteUser(id: any) {
    return this.myClient.delete(this.Base_URL + '/' + id);
  }

  addUser(data: any) {
    return this.myClient.post(this.Base_URL, data);
  }


}
