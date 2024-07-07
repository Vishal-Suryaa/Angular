import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RootObject } from '../../store/assessments/assessmenets.model';
import { AssessmentBaseComponent } from '../assessment-base/assessment-base.component';
import { AssessmentsService } from '../../services/apiService/assessments.service';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrl: './assessments.component.css'
})
export class AssessmentsComponent extends AssessmentBaseComponent implements OnInit {
  intro = true;

  constructor(assessmentService: AssessmentsService, route: ActivatedRoute, router: Router,) {
    super(assessmentService, route, router);
  }
  override ngOnInit(): void {
    super.ngOnInit();
  }

  get pausedAt(): number {
  return this.assessmentData.responses.responses.length;
  }

  start() {
    this.router.navigate([`/assessments/${this.assessmentType}/q${this.pausedAt}`]);
    this.intro = false;
  }

}
