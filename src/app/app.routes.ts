import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CVComponent } from './components/cv/cv.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogPostComponent } from './components/blog/blog-item/blog-post.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cv', component: CVComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/:slug', component: BlogPostComponent },
    { path: 'contact', component: ContactComponent }
];
