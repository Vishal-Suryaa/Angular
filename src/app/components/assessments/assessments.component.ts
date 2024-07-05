import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RootObject } from '../../store/assessments/assessmenets.model';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrl: './assessments.component.css'
})
export class AssessmentsComponent implements OnInit {
  assessmentType = '';
  questionNumber = '';
  intro = true;
  qno: any;
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.assessmentType = this.route.snapshot.params['type'];
    this.router.navigate([`/assessments/${this.assessmentType}/intro`]);
  }

  start() {
    this.router.navigate([`/assessments/${this.assessmentType}/q1`]);
    this.intro = false;
    this.questionNumber = 'q1';
    if(this.questionNumber){
      this.qno = this.questionNumber.split('')[1];
    }
  }

  next() {
    this.questionNumber = this.incrementTab(this.questionNumber);
    this.router.navigate([`/assessments/${this.assessmentType}/${this.questionNumber}`]);
    this.qno = this.questionNumber.split('')[1];
  }


  private incrementTab(tab: string): string {
    const match = tab.match(/q(\d+)/);
    if (match) {
      const nextTabNumber = parseInt(match[1], 10) + 1;
      return `q${nextTabNumber}`;
    }
    return tab; // return the same tab if it doesn't match the expected pattern
  }

  riasec =
    {
      id: 1202185,
      user_id: 3229536,
      no_of_questions: 60,
      entries: [
        {
          id: 2204,
          language: "en",
          age_range: "8-12",
          gender: "Both",
          order: 1,
          status: "Published",
          attributes: {
            question: {
              area: "Realistic",
              description: "Build kitchen cabinets",
              type: "multiple_choice"
            },
            answers: {
              1: "Strongly Dislike",
              2: "Dislike",
              3: "Unsure",
              4: "Like",
              5: "Strongly Like"
            }
          },
          assessment_type: "RIASEC"
        },
        {
          id: 2205,
          language: "en",
          age_range: "8-12",
          gender: "Both",
          order: 2,
          status: "Published",
          attributes: {
            question: {
              area: "Realistic",
              description: "Lay brick or tile",
              type: "multiple_choice"
            },
            answers: {
              1: "Strongly Dislike",
              2: "Dislike",
              3: "Unsure",
              4: "Like",
              5: "Strongly Like"
            }
          },
          assessment_type: "RIASEC"
        },
        {
          id: 2206,
          language: "en",
          age_range: "8-12",
          gender: "Both",
          order: 3,
          status: "Published",
          attributes: {
            question: {
              area: "Realistic",
              description: "Study ways to reduce water pollution",
              type: "multiple_choice"
            },
            answers: {
              1: "Strongly Dislike",
              2: "Dislike",
              3: "Unsure",
              4: "Like",
              5: "Strongly Like"
            }
          },
          assessment_type: "RIASEC"
        },
      ],
    }

}
