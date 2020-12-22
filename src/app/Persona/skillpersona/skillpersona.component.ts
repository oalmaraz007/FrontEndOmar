import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillpersona',
  templateUrl: './skillpersona.component.html',
  styleUrls: ['./skillpersona.component.css']
})
export class SkillpersonaComponent implements OnInit {

  
  @Input() skills: any;
  constructor() { }

  ngOnInit(): void {
  }

}
