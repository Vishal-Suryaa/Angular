import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Answers, AssessmentConfig, Attributes, Entry, Question } from '../../store/assessments/assessmenets.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-assessments-questions',
  templateUrl: './assessments-questions.component.html',
  styleUrl: './assessments-questions.component.css'
})
export class AssessmentsQuestionsComponent implements OnInit {
  @Input() qno = 1;
  @Input() entries: Entry[] = [];
  @Input() assessConfig: AssessmentConfig;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.entries;
  }

  getKeys(obj: any): Array<string> {
    return Object.keys(obj);
  }

  private incrementTab(tab: string): string {
    const match = tab.match(/q(\d+)/);
    if (match) {
      this.qno = parseInt(match[1], 10) + 1;
      return `q${this.qno}`;
    }
    return tab;
  }

  next() {
    let tab = this.route.snapshot.params['tab'];
    tab = this.incrementTab(tab);
    this.router.navigate([`/assessments/${this.assessConfig.title.toLowerCase()}/${tab}`]);
  }
}
