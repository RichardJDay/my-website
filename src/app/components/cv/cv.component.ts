import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  imports: [],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent {
  skills = ['HTML', 'CSS', 'JavaScript', 'Angular', 'Node.js'];
  experience = [
    {
      title: 'Full-stack Developer',
      company: 'XYZ Ltd.',
      duration: '2022 - Present',
      description: 'Developed user interfaces using Angular and other frontend technologies.'
    },
    {
      title: 'Web Developer',
      company: 'ABC Inc.',
      duration: '2020 - 2022',
      description: 'Worked on backend services and frontend design.'
    }
  ];
}
