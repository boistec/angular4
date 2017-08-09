import { SignupFormComponent } from './signup-form/signup-form.component';
import { HttpModule } from '@angular/http';
import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesComponent } from 'app/components/courses/courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { InputcaseComponent } from './inputcase/inputcase.component';
import { TitleCasePipe } from './title-case.pipe';
import { ApifavoriteComponent } from './apifavorite/apifavorite.component';
import { NgDirectiveComponent } from './ng-directive/ng-directive.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { TraversaloperatorComponent } from './traversaloperator/traversaloperator.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { PostsComponentComponent } from './posts-component/posts-component.component';

@NgModule({
  declarations: [
    SignupFormComponent,
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    FavoriteComponent,
    InputcaseComponent,
    TitleCasePipe,
    ApifavoriteComponent,
    NgDirectiveComponent,
    NgStyleComponent,
    NgClassComponent,
    TraversaloperatorComponent,    
    CustomdirectiveDirective, ContactFormComponent, CustomFormComponent, ResetpasswordComponent, PostsComponentComponent    
  ],
  imports: [    
    BrowserModule ,
    FormsModule,
    ReactiveFormsModule,
    HttpModule    
  ],
  providers: [
    CoursesService,
    AuthorsService    
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
