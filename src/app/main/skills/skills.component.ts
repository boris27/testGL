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
    // this method not working because some angular issues when building project,
    // <base href="/"> not working properly in new version of angular, on previous version 4 fix with document.location works
    // problem only on building stage for github pages, when launching webpack locally - no problem

    /*this.http.get('../../../assets/json/skills.json')
      .subscribe(
        data => {
              this.skillsArr = data;
              setTimeout(() => this.skillsFill(), 0 );
             },
        err => console.log(err) );*/
    this.skillsArr = [
      { name: 'HTML', level: 8},
      { name: 'CSS3', level: 5},
      { name: 'JavaScript', level: 10},
      { name: 'ReactJS', level: 8},
      { name: 'AngularJS', level: 8}
    ];
    setTimeout(() => this.skillsFill(), 0 );
  }
}
