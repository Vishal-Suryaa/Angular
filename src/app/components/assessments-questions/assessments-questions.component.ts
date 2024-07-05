import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Answers, Attributes, Entry, Question } from '../../store/assessments/assessmenets.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-assessments-questions',
  templateUrl: './assessments-questions.component.html',
  styleUrl: './assessments-questions.component.css'
})
export class AssessmentsQuestionsComponent implements OnInit, OnChanges {
  @Output() nextQuestion = new EventEmitter();
  questionNo: number = 0;
  @Input() questionNumber: string = '';
  @Input() question = '';
  @Input() questions: Question = {};
  @Input() answers: { [key: string]: string } = {};;
  @Input() assessmentType = '';
  @Input() qno = 0;
  @Input() totalQuestions = 0;

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
  const s = this.questions.description;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (
    //   (changes.questionNumber && !changes.questionNumber?.firstChange)
    // ) {
    //   const tab = this.route.snapshot.params['tab'];
    //   this.questionNo = tab.split('')[1];
    // }
  }

  next() {
    this.nextQuestion.emit(true);
  }

  getKeys(obj: any): Array<string> {
    return Object.keys(obj);
  }
}
