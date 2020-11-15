import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { MeetingsService } from './api/services';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MeetingServiceService {
  // @ts-ignore
  public meeting: Array<Meeting> = [];
  public getMeetings(): Observable<Array<Meeting>>{
    return this.servise.getApiMeetings().pipe( map(data => {
      return data.map(item => {
        const result = new Meeting();
        result.id = item.id;
        result.title = item.title;
        result.date = new Date(item.date);
        if (item.visitors){
          result.numberOfAttendances = item.visitors.length;
        }
        else{
          result.numberOfAttendances = 0;
        }
        return result;
      });
    }));
  }
  constructor(private servise: MeetingsService) {
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
