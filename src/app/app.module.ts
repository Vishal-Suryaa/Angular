import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AssessmentNavBarComponent } from './components/assessment-nav-bar/assessment-nav-bar.component';
import { AssessmentsComponent } from './components/assessments/assessments.component';
import { AssessmentInfoComponent } from './components/assessment-info/assessment-info.component';
import { AssessmentsQuestionsComponent } from './components/assessments-questions/assessments-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    AssessmentNavBarComponent,
    AssessmentsComponent,
    AssessmentInfoComponent,
    AssessmentsQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
