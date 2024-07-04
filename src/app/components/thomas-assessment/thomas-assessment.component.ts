import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-thomas-assessment',
  templateUrl: './thomas-assessment.component.html',
  styleUrl: './thomas-assessment.component.css'
})
export class ThomasAssessmentComponent implements OnInit {
  assessmentType: any;
  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.assessmentType = this.route.snapshot.params['type'];
  }

  next() {
    const currentTab = this.route.snapshot.params['tab'];
    const nextTab = this.incrementTab(currentTab);
    this.router.navigate([`/assessments/${this.assessmentType}/${nextTab}`]);
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
