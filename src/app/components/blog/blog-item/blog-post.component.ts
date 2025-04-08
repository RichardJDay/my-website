import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-item',
  imports: [],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent implements OnInit {
  slug: string = '';

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')!;

  }
}
