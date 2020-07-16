import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  data = [{id: 1, name : 'Hero1', age:'12'}, {id: 2, name: 'Hero2', age: '23'}];

  getDashboardData(): Observable<any>  {
    return of(this.data);
  }
}
