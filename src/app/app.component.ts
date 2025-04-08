import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'my-website';
  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {

    this.titleService.setTitle('Richard Day Software Developer');

    this.metaService.updateTag({ name: '.net developer with angular experience', content: '.net developer with angular experience' });

  }
}
