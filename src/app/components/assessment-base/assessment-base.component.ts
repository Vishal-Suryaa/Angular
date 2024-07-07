import { Component, Input } from '@angular/core';
import { getConfig } from '../../helper/assessment.helper';
import { AssessmentsService } from '../../services/apiService/assessments.service';
import { AssessmentConfig, RootObject } from '../../store/assessments/assessmenets.model';
import { ActivatedRoute, Router } from '@angular/router';
import { riasec } from '../../store/assessments.constants';

@Component({
  selector: 'app-assessment-base',
  templateUrl: './assessment-base.component.html',
  styleUrl: './assessment-base.component.css'
})
export class AssessmentBaseComponent {
  assessmentType: string;
  assessConfig: AssessmentConfig;
  assessmentData: any;

  constructor(protected assessmentService: AssessmentsService, protected route: ActivatedRoute, protected router: Router) { }

  ngOnInit(): void {
    this.assessmentType = this.route.snapshot.params['type'];
    this.router.navigate([`/assessments/${this.assessmentType}/intro`]);
    this.assessConfig = getConfig(this.assessmentType.toUpperCase());
    this.loadData();
  }

  loadData(): void {
    if (this.assessConfig) {
      this.assessmentData = riasec;
      // this.assessmentService.fetchData(this.assessConfig.apiEndpoint).subscribe(
      //   data => {
      //   },
      //   error => {
      //     console.error('Error loading data:', error);
      //   }
      // );
    } else {
      console.error('Invalid assessment type');
    }
  }
}

