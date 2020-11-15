/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MeetingDto } from '../models/meeting-dto';
import { AddMeetingDto } from '../models/add-meeting-dto';
import { AddMeetingVisitorDto } from '../models/add-meeting-visitor-dto';
@Injectable({
  providedIn: 'root',
})
class MeetingsService extends __BaseService {
  static readonly getApiMeetingsPath = '/api/Meetings';
  static readonly postApiMeetingsPath = '/api/Meetings';
  static readonly postApiMeetingsVisitorsPath = '/api/Meetings/visitors';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getApiMeetingsResponse(): __Observable<__StrictHttpResponse<Array<MeetingDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Meetings`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MeetingDto>>;
      })
    );
  }
  /**
   * @return Success
   */
  getApiMeetings(): __Observable<Array<MeetingDto>> {
    return this.getApiMeetingsResponse().pipe(
      __map(_r => _r.body as Array<MeetingDto>)
    );
  }

  /**
   * @param body undefined
   */
  postApiMeetingsResponse(body?: AddMeetingDto): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Meetings`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param body undefined
   */
  postApiMeetings(body?: AddMeetingDto): __Observable<null> {
    return this.postApiMeetingsResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   */
  postApiMeetingsVisitorsResponse(body?: AddMeetingVisitorDto): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Meetings/visitors`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param body undefined
   */
  postApiMeetingsVisitors(body?: AddMeetingVisitorDto): __Observable<null> {
    return this.postApiMeetingsVisitorsResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module MeetingsService {
}

export { MeetingsService }
