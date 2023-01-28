import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswerCheckerService {

  points:number = 0;

  constructor( ) { }

    check(nota:string, valuePic:string)
    {
      valuePic = valuePic.substring(0, 1)
    
      if (nota == valuePic)
      {
        this.points++
      }
      
    }
    

    getPoints(){
      return this.points;
    }

    setPoints(){
      this.points = 0;
      return this.points;
    }


}
