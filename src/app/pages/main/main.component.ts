import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {RandomnessGeneratorService} from '../../service/randomness-generator.service'
import {AnswerCheckerService} from '../../service/answer-checker.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges {
  @Input() note:string = ""
  @Input() acertos:number = 0;
  constructor(private random: RandomnessGeneratorService, private checker:AnswerCheckerService) { }

  ngOnInit(): void {
    this.newPic()
  }

  ngOnChanges(): void{
    
  }

  newPic()
  {
    this.note = this.random.makeItRandom();
    this.acertos = this.checker.getAcertos();
  }

  // Check(nota:string){
  //   this.checker.check(nota);
  // }
}
