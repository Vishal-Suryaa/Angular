import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assessment-nav-bar',
  templateUrl: './assessment-nav-bar.component.html',
  styleUrl: './assessment-nav-bar.component.css'
})
export class AssessmentNavBarComponent {

  constructor(private router: Router){}

  navigateTo() {
    this.router.navigate(['']);
  }

}
