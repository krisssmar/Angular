import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsAttendComponent } from './meetings-attend.component';

describe('MeetingsAttendComponent', () => {
  let component: MeetingsAttendComponent;
  let fixture: ComponentFixture<MeetingsAttendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingsAttendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingsAttendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
