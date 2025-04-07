import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient) { }

  public sendEmail(email: string, name: string, message: string) {
    this.httpClient.put('http://localhost:4000/email', {
      email: email,
      name: name,
      message: message
    }).subscribe()
  }
}
