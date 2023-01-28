import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {RandomnessGeneratorService} from '../../service/randomness-generator.service'
import {AnswerCheckerService} from '../../service/answer-checker.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges {
  @Input() note:string = ""
  @Input() acertos:number = 0;
  qtde_restante:number = 10;
  @Input() keyboard:string = ""
  @Input() nivel:string=''
  
 constructor(
    private random: RandomnessGeneratorService, 
    private checker:AnswerCheckerService,
    private navegador: Router
    ) { }

  ngOnInit(): void {
    this.newPic()
    this.checker.setPoints();
    this.keyboard = this.random.getKeyboardUrl();
  }

  ngOnChanges(): void{
    
  }

  newPic()
  { if(this.qtde_restante>0)
    {
      this.nivel = this.random.getNivel();
      this.note = this.random.makeItRandom();
      this.acertos = this.checker.getPoints();
      this.qtde_restante--;
    }
    else{
      this.navegador.navigate(['/result'])
    }

  }
}
