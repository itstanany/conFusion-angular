import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  // get all leaders
  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(LEADERS);
  }

  // get a specific leader
  getSpecificLeader(id: string): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((ldr) => (ldr.id === id))[0]);
  }
  // get a featured leader
  getFeaturedLeader(): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((ldr) => ldr.featured )[0]);
  }
  constructor( ) { }
}
