import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  @Input() height:string=''
  @Input() valuePic:string=''

  acertos:number = 0;

  notes:string[] = ['C','D','E','F','G','A','B']
  constructor() { }

  ngOnInit(): void {
    const listaTeclas = document.querySelector('#lista-teclas');
    
    let value = window.getComputedStyle(listaTeclas!).width;
    value = value.substring(0,value.length-2);
    let newHeight = Number(value)
    newHeight =  0.6*newHeight
    this.height = newHeight+'px';


  }

  Check(note:string){
  
    this.valuePic = this.valuePic.substring(0, 1)
  
    if (note == this.valuePic)
    {
      this.acertos = this.acertos + 1;
    }
  }

}