/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'http://ng-2020-fall-meetings.azurewebsites.net';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
