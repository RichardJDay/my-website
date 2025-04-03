import { Component } from '@angular/core';
import { EmailService } from '../../shared/services/email.service';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private emailService: EmailService){}

  submitForm() {
    console.log('Form submitted:', this.name, this.email, this.message);
    this.emailService.sendEmail()
  }
}
