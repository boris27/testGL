import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {

  skillsArr;

  constructor(private http: HttpClient, private elementRef: ElementRef) { }

  skillsFill(): void {
    const skillsCol = this.elementRef.nativeElement.querySelectorAll('.skill');
    [].forEach.call(skillsCol,
      (val, index) => {
                const rounds = val.querySelectorAll('.round');
                for (let i = 0; i < this.skillsArr[index].level; i++ ) {
                  rounds[i].style.backgroundColor = 'black';
                }
              }
    );
  }

  ngOnInit() {
    //this method not working because some angular issues when building project,
    // <base href="/"> not working properly in new version of angular
    this.http.get('../../../assets/json/skills.json')
      .subscribe(
        data => {
              this.skillsArr = data;
              setTimeout(() => this.skillsFill(), 0 );
             },
        err => console.log(err) );
  }
}
