import { Component, Input, OnInit } from '@angular/core';
import {AnswerCheckerService} from '../../service/answer-checker.service'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() points:number = 0;
  @Input() mensagem:string="Parabéns!"
  constructor(private answers: AnswerCheckerService) { 
    this.points = this.answers.getAcertos()

    if(this.points < 5 )
    {
      this.mensagem = "Você ainda pode melhorar."
    }
    else if (this.points < 7)
    {
      this.mensagem = "Legal, "
    }

  }

  ngOnInit(): void {

  }

}
