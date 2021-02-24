import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component(
    {
        templateUrl: './course-list.component.html'
    }
)
export class CourseListComponent implements OnInit{
    
    _courses: Course[] = [];
    filterCourses: Course[] = [];
    _filterBy: string = '';

    constructor(private courseService: CourseService){

    }

    ngOnInit(): void {
        this._courses = this.courseService.retrieveAll();
        this.filterCourses = this._courses;
    }

    set filter(value: string){
        console.log(value);
        this._filterBy = value;
        if(value.length > 0)
            this.filterCourses = this._courses.filter((c: Course) => c.name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1)
        else
            this.filterCourses = this._courses;
    }

    get filter(){
        return this._filterBy;
    }

}