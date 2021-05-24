import { Component, OnInit } from '@angular/core';
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
  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.roomsArray = this.roomService.retrieveRoomArray();
  }
}
