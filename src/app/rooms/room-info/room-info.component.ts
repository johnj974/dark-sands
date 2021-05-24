import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomModel } from 'src/app/shared/models/room.model';
import { RoomService } from 'src/app/shared/services/room.service';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.scss'],
})
export class RoomInfoComponent implements OnInit {
  //.
  roomsArray: RoomModel[] = [];
  constructor(private roomService: RoomService, private router: Router) {}

  ngOnInit(): void {
    this.roomsArray = this.roomService.retrieveRoomArray();
  }

  navigate(id: number, name: string) {
    const roomName = name.replace(/ /g, '');
    this.router.navigate(['rooms', id, roomName]);
  }
}
