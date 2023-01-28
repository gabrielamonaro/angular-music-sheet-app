import { Component, Input, OnInit } from '@angular/core';
import {AnswerCheckerService} from '../../service/answer-checker.service'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() points:number = 0;
  @Input() message:string="Parabéns!"
  constructor(private answers: AnswerCheckerService) { 
    this.points = this.answers.getPoints()

    if(this.points < 5 )
    {
      this.message = "Você ainda pode melhorar."
    }
    else if (this.points < 7)
    {
      this.message = "Legal, "
    }

  }

  ngOnInit(): void {
    this.answers.setPoints();
  }

}
