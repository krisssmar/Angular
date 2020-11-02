import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MeetingListComponent} from './meeting-list/meeting-list.component';
import {MeetingsAttendComponent} from './meetings-attend/meetings-attend.component';
import {CreateMeetingComponent} from './create-meeting/create-meeting.component';

const routes: Routes = [
  {path : '', pathMatch: 'full', component: MeetingListComponent},
  {path : 'attend/:id', component: MeetingsAttendComponent},
  {path : 'create', component: CreateMeetingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
