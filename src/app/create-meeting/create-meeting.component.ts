import { Component, OnInit } from '@angular/core';
import {Meeting, MeetingServiceService} from '../meeting-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.scss']
})
export class CreateMeetingComponent implements OnInit {
public model: CreateMeetingModel;
  constructor(private service: MeetingServiceService, private router: Router) {
    this.model = new CreateMeetingModel();
    this.model.date =  new Date();
    this.model.title = '';
  }

  ngOnInit(): void {
  }
  create(): void {
    this.service.addMeeting(this.model.title, this.model.date).subscribe(x => this.router.navigate(['']));

  }
}
export class CreateMeetingModel{
  public title: string;
  public date: Date;
}
