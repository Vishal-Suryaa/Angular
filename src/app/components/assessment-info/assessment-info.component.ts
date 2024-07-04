import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assessment-info',
  templateUrl: './assessment-info.component.html',
  styleUrl: './assessment-info.component.css'
})
export class AssessmentInfoComponent {
  @Output() startAssessment = new EventEmitter<boolean>();
  @Input() logo = '';
  @Input() image = '';
  @Input() title = '';
  @Input() subText = '';
  @Input() video = '';

  constructor(private router: Router){}

  start() {
    this.startAssessment.emit(true);
  }

}
