import { Course } from './course';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    retrieveAll(): Course[] {
        return courses;
    }
}

let courses: Course [] = [
    {
        id:1,
        name: 'Curso Angular 8',
        imageUrl: '/assets/images/angular.png',
        description: 'Curso realizado na Digital Innovation One',
        price: 199.80,
        code: 'kdj-001',
        duration: 45,
        rating: 4.0,
        releaseDate: '2/12/2020'
        },
        {
        id:2,
        name: 'Angular Fullstack Developer',
        imageUrl: '/assets/images/angular-fullstack.jpg',
        description: 'Curso realizado na Digital Innovation One',
        price: 350.90,
        code: 'hgj-002',
        duration: 45,
        rating: 4.0,
        releaseDate: '1/1/2021'
        },
        {
        id:3,
        name: 'C# Developer',
        imageUrl: '/assets/images/csharp.png',
        description: 'Curso realizado na Digital Innovation One',
        price: 480.00,
        code: 'dkh-003',
        duration: 55,
        rating: 5.0,
        releaseDate: '2/6/2021'
        },
        {
        id:3,
        name: 'Java Developer',
        imageUrl: '/assets/images/java.png',
        description: 'Curso realizado na Digital Innovation One',
        price: 600.00,
        code: 'fdt-004',
        duration: 55,
        rating: 5.0,
        releaseDate: '4/6/2021'
    }    
];