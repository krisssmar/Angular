/* tslint:disable */
import { VisitorDto } from './visitor-dto';
export interface MeetingDto {
  date?: string;
  id?: number;
  title?: string;
  visitors?: Array<VisitorDto>;
}
