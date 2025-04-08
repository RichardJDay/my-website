import { Component } from '@angular/core';
import { EmailService } from '../../shared/services/email.service';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  messageSent: boolean = false;
  constructor(private emailService: EmailService) { }

  submitForm() {
    console.log('Form submitted:', this.name, this.email, this.message);
    this.emailService.sendEmail(this.email, this.name, this.message).subscribe(() => {
        this.name = '';
        this.email = '';
        this.message = '';
        this.messageSent = true;
      }
    )
  }
}
