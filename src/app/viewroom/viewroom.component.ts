import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';
import { Router, Routes } from '@angular/router';
import { Rooms } from '../interface/Rooms';

@Component({
  selector: 'app-viewroom',
  templateUrl: './viewroom.component.html',
  styleUrls: ['./viewroom.component.scss']
})
export class ViewroomComponent implements OnInit {

  Rooms:any ;

  constructor(private roomservice : RoomService, private router: Router) {}

  ngOnInit(): void {

    let id = localStorage.getItem("rooms_id");
    
    this.roomservice.getOneRoom(id).subscribe((data=[])=>{
      this.Rooms = data;
      console.log(this.Rooms)
    });
  
  }
  ngOnDestroy(): void
  {
    localStorage.removeItem("rooms_id");
  }

}
