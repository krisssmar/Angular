import { Component, OnInit } from '@angular/core';
import {Meeting, MeetingServiceService} from '../meeting-service.service';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {
  public meeting: Meeting[];

  constructor(private service: MeetingServiceService) {

    this.meeting = [];

  }

  ngOnInit(): void {
    this.service.getMeetings().subscribe(x => {
      this.meeting = x;
    });
  }

}
