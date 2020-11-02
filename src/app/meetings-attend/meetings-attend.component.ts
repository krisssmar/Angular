import { Component, OnInit } from '@angular/core';
import {CreateMeetingModel} from '../create-meeting/create-meeting.component';
import {MeetingServiceService} from '../meeting-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-meetings-attend',
  templateUrl: './meetings-attend.component.html',
  styleUrls: ['./meetings-attend.component.scss']
})
export class MeetingsAttendComponent implements OnInit {
  public model: AttendMeetingModel;
  constructor(private service: MeetingServiceService, private router: Router) {
    this.model = new AttendMeetingModel();
    this.model.name =  '';
    this.model.email = '';
  }

  ngOnInit(): void {
  }
  create(): void {
    const id = this.router.url.substring(this.router.url.lastIndexOf('/') + 1, this.router.url.length );
    this.service.addAttendee(Number(id)).subscribe(x => this.router.navigate([''])); // после действия перейти по ссылке
  }
}
export class AttendMeetingModel{
  public name: string;
  public email: string;
}
