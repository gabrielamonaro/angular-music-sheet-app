import { Component, Input, OnInit } from '@angular/core';
import {RandomnessGeneratorService} from '../../service/randomness-generator.service'
import {AnswerCheckerService} from '../../service/answer-checker.service'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() note:string = ""
  constructor(private random: RandomnessGeneratorService, private checker:AnswerCheckerService) { }

  ngOnInit(): void {
    this.note = this.random.makeItRandom();
  }

  Check(nota:string){
    this.checker.check(nota);
  }
}
