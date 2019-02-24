import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

// using RxJs
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  // get all leaders
  getLeaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2000));
  }

  // get a specific leader
  getSpecificLeader(id: string): Observable<Leader> {
    return of(LEADERS.filter((ldr) => (ldr.id === id))[0]).pipe(delay(2000));
  }
  // get a featured leader
  getFeaturedLeader(): Observable<Leader> {
    return of(LEADERS.filter((ldr) => (ldr.featured))[0]).pipe(delay(2000));
  }
  constructor( ) { }
}
