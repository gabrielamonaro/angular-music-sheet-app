import { Component, Input, OnInit } from '@angular/core';
import {AnswerCheckerService} from '../../service/answer-checker.service'

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  @Input() height:string=''
  @Input() valuePic:string=''
  @Input() imageKeyboard:string= ""


  notes:string[] = ['C','D','E','F','G','A','B']
  constructor(private checker: AnswerCheckerService) { }

  ngOnInit(): void {
    const keysList = document.querySelector('#keys-list');
    
    let value = window.getComputedStyle(keysList!).width;
    value = value.substring(0,value.length-2);
    let newHeight = Number(value)
    newHeight =  0.6*newHeight
    this.height = newHeight+'px';
  }

  Check(note:string, valuePic:string){
    this.checker.check(note, this.valuePic)
    this.playSounds(note)
  }
  
  playSounds(idElement: string)
  {
    const track = document.querySelector(`#audio-${idElement}`)?.attributes[1].value;  
    const audio = new Audio(track)
    audio.play();
  }

}