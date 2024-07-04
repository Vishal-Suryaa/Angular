import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrl: './assessments.component.css'
})
export class AssessmentsComponent implements OnInit {
  assessmentType = '';
  questionNumber = '';
  intro = true;
  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.assessmentType = this.route.snapshot.params['type'];
    this.router.navigate([`/assessments/${this.assessmentType}/intro`]);
  }

  start() {
    this.router.navigate([`/assessments/${this.assessmentType}/q1`]);
    this.intro = false;
    this.questionNumber = 'q1';
  }

  next() {
    this.questionNumber = this.incrementTab(this.questionNumber);
    this.router.navigate([`/assessments/${this.assessmentType}/${this.questionNumber}`]);
  }


  private incrementTab(tab: string): string {
    const match = tab.match(/q(\d+)/);
    if (match) {
      const nextTabNumber = parseInt(match[1], 10) + 1;
      return `q${nextTabNumber}`;
    }
    return tab; // return the same tab if it doesn't match the expected pattern
  }
  
}
