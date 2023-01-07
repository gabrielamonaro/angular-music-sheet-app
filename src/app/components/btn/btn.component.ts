import { Component, Input, OnInit } from '@angular/core';
import {RandomnessGeneratorService} from '../../service/randomness-generator.service'

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {
  @Input() text:string =''
  @Input() nivel:string=''
  @Input() flagHome:string='true'
 
  constructor(private service: RandomnessGeneratorService) { }

  ngOnInit(): void {
  }

  setNivel(nivel:string){
    if ( this.flagHome == "true"){
        this.service.setNivel(nivel);
     }
     else{
      this.nivel = this.service.getNivel();
     }
}

}
