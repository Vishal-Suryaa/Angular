import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrl: './assessments.component.css'
})
export class AssessmentsComponent implements OnInit {
  assessmentType = '';
  intro = true;
  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.assessmentType = this.route.snapshot.params['type'];
    this.router.navigate([`/assessments/${this.assessmentType}/intro`]);
  }

  start() {
    this.router.navigate([`/assessments/${this.assessmentType}/q1`]);
    this.intro = false;
  }
  
}
