import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  //api
  private baseUrl = "http://localhost:8080";

  constructor(private http : HttpClient) { }


  
  getRooms(){
    return this.http.get(this.baseUrl+ '/rooms')
  }

  getOneRoom(id:any){
    return this.http.get(this.baseUrl+'/rooms/' + id)
  }

}
