import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';
import { Rooms } from '../interface/Rooms';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

 Rooms: any =[];

  constructor(private roomservice : RoomService, private router : Router) { }

  ngOnInit(): void {

    
    this.roomservice.getRooms().subscribe((data =[])=>{
      this.Rooms = data;
      console.log(data)

      
    })
    
  }

  
  seeProfile(items:any)
  {

    console.log(items.rooms_id);
    this.router.navigate(['/viewRoom'])

    localStorage.setItem("rooms_id", items.rooms_id);
    
  }



}
