import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RandomnessGeneratorService {

  constructor() { }
  notes:string[] = environment.notes
  makeItRandom()
  {
    let value = this.notes[Math.floor(Math.random()*this.notes.length)] 
   
    return value
  
  }
}
