import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Detail } from '../detail.model';

@Component({
  selector: 'app-details-list',
  templateUrl: './details-list.component.html',
  styleUrls: ['./details-list.component.css']
})
export class DetailsListComponent implements OnInit {
  @Output() aboutSelected = new EventEmitter<string>();
  @Output() expSelected = new EventEmitter<string>();
  @Output() skillsSelected = new EventEmitter<string>();

  detail = new Detail('Who am I','Experience','Skills');
  constructor() { }
  ngOnInit() {
  }

  onAboutSelect(about: string)
  {
    console.log(about);
    this.aboutSelected.emit("I am a software engineer"); // pull from the db
  }
  onExpSelect(exp: string)
  {
    console.log(exp);
    this.expSelected.emit("Experienced in building robust web applications and API's "); // pull from the db
  }
  onSkillsSelect(skills: string)
  {
    console.log(skills);
    this.skillsSelected.emit("ASP.Net, ASP.Net Core, C#, WebAPIs, REST, AWS"); // pull from the db
  }

}
