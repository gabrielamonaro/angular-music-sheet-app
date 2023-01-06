import { Component, Input, OnInit } from '@angular/core';
import {RandomnessGeneratorService} from '../../service/randomness-generator.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() note:string = ""
  constructor(private random: RandomnessGeneratorService) { }

  ngOnInit(): void {
    this.note = this.random.makeItRandom();
  }

}
