import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  // get all leaders
  getLeaders(): Promise<Leader[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS), 2000);
    });
  }

  // get a specific leader
  getSpecificLeader(id: string): Promise<Leader> {
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS.filter((ldr) => (ldr.id === id))[0]), 2000);
    });
  }
  // get a featured leader
  getFeaturedLeader(): Promise<Leader> {
    return new Promise(resolve => {
      setTimeout( () => resolve(LEADERS.filter((ldr) => (ldr.featured))[0]), 2000);
    });
  }
  constructor( ) { }
}
