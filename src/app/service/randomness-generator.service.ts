import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RandomnessGeneratorService {

  nivel:string = '1';

  constructor() { }
  notes:string[] = environment.notes
  makeItRandom()
  {
    let value = this.notes[Math.floor(Math.random()*this.notes.length)] 
   
    return value
  
  }
  setNivel(value:string)
  {
    this.nivel = value;
  }
  getNivel()
  {
    return this.nivel;
  }

  getKeyboardUrl(){
    const url = "url('../../../assets/img/nivel" + this.nivel + "/keyboard.png')"
    console.log(url)
    return url
    
  }

}
