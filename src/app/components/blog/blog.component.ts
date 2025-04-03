import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  posts = [
    {
      title: 'My Angular Journey',
      summary: 'This post details my experiences learning Angular and building apps.',
      date: '2025-04-01'
    },
    {
      title: 'Web Development Best Practices',
      summary: 'Here are some tips and tricks for building clean, scalable web applications.',
      date: '2025-03-25'
    }
  ];
}
