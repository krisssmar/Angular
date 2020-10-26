import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingServiceService {
  // @ts-ignore
  public getMeetings(): Observable<Array<Meeting>>{

    const meeting: Array<Meeting> = [];

    meeting.push({title: 'Concert', date: new Date(Date.parse('01.01.2020')), numberOfAttendencies: 100});
    meeting.push({title: 'Lecture', date: new Date(Date.parse('02.01.2020')), numberOfAttendencies: 10});
    meeting.push({title: 'Football Match', date: new Date(Date.parse('04.01.2020')), numberOfAttendencies: 1000});

    return of(meeting);
  }
  constructor() { }
}

export class Meeting{
  public title: string;
  public date: Date;
  public numberOfAttendencies: number;
}
