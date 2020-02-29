import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { CoursesService } from './service/courses.service';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { SummaryPipePipe } from './pipes/summary-pipe.pipe';
import { TitlecasePipePipe } from './pipes/titlecase-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipePipe,
    TitlecasePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }