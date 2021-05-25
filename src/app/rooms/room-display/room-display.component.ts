import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Feature, RoomModel } from 'src/app/shared/models/room.model';
import { RoomService } from 'src/app/shared/services/room.service';

@Component({
  selector: 'app-room-display',
  templateUrl: './room-display.component.html',
  styleUrls: ['./room-display.component.scss'],
})
export class RoomDisplayComponent implements OnInit {
  //.
  chosenRoom: RoomModel;
  chosenRoomFeatureArray: Feature[];
  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params.id, params.roomName);
      const roomArray = this.roomService.retrieveRoomArray();
      this.chosenRoom = roomArray[params.id];
      this.chosenRoomFeatureArray = this.chosenRoom.features;
    });
  }

  navigate() {}
}
