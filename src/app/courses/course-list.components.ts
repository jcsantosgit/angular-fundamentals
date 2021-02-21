import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component(
    {
        selector: 'app-course-list',
        templateUrl: './course-list.component.html'
    }
)
export class CourseListComponent implements OnInit{
    
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id:1,
                name: 'Curso Angular8',
                imageUrl: '/assets/images/angular.png',
                price: 199.80,
                code: '001',
                duration: 45,
                rating: 4.0,
                releaseDate: 'Desember, 2, 2021'
            },
            {
                id:2,
                name: 'Angular Developer',
                imageUrl: '/angular/images/angular.png',
                price: 350.90,
                code: '002',
                duration: 45,
                rating: 4.0,
                releaseDate: 'January, 5, 2021'
            },
            {
                id:3,
                name: 'Java Developer',
                imageUrl: '/assets/images/java.png',
                price: 600.00,
                code: '003',
                duration: 55,
                rating: 5.0,
                releaseDate: 'Febrary, 2, 2021'
            }            
        ]
    }


}