import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient) { }

  public sendEmail() {
    this.httpClient.put('http://angular-ssr:4000/email', {}).subscribe()
  }
}
