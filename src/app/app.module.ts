import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
import { MeetingsAttendComponent } from './meetings-attend/meetings-attend.component';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';
import {FormsModule} from '@angular/forms';
import {ApiModule} from './api/api.module';

@NgModule({
  declarations: [
    AppComponent,
    MeetingListComponent,
    MeetingsAttendComponent,
    CreateMeetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
