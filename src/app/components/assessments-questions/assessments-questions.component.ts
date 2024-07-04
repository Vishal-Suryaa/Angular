import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-assessments-questions',
  templateUrl: './assessments-questions.component.html',
  styleUrl: './assessments-questions.component.css'
})
export class AssessmentsQuestionsComponent {
  @Input() question = '';
}
