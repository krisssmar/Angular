import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingServiceService {
  // @ts-ignore
  public meeting: Array<Meeting> = [];
  public getMeetings(): Observable<Array<Meeting>>{
    return of(this.meeting);
  }
  constructor() {
    this.meeting.push({id: 1, title: 'Concert', date: new Date(Date.parse('01.01.2020')), numberOfAttendances: 100});
    this.meeting.push({id: 2, title: 'Lecture', date: new Date(Date.parse('02.01.2020')), numberOfAttendances: 10});
    this.meeting.push({id: 3, title: 'Football Match', date: new Date(Date.parse('04.01.2020')), numberOfAttendances: 1000});
  }

  public addMeeting(title: string, date: Date): Observable<any> {
    const id = this.meeting.map(x => x.id).reduce((previous, next) => previous = previous < next ? next : previous ) + 1;
    const newItem = {id: id, title: title, date: date, numberOfAttendances: 0};
    this.meeting.push(newItem);
    return of(newItem);
  }
  public addAttendee(id: number): Observable<any>  {
    this.meeting.find(x => x.id === id).numberOfAttendances += 1;
    return of(this);
  }
}

export class Meeting{
  public id: number;
  public title: string;
  public date: Date;
  public numberOfAttendances: number;
}
