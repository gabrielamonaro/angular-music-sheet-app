import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() text:string =''
  @Input() size:string='28px'
  constructor() { }

  ngOnInit(): void {
  }

}
