import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswerCheckerService {

  acertos:number = 0;

  constructor( ) { }

    check(nota:string, valuePic:string)
    {
      valuePic = valuePic.substring(0, 1)
    
      if (nota == valuePic)
      {
        this.acertos++
        console.log(this.acertos)
      }
      
    }
    

    getAcertos(){
      return this.acertos;
    }


}
