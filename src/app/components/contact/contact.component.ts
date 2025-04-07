import { Component } from '@angular/core';
import { EmailService } from '../../shared/services/email.service';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-contact',
  imports: [FormsModule],
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

    this.emailService.sendEmail(this.email, this.name, this.message)
  }
}
