import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  constructor(@Inject(DOCUMENT) private doc: Document) {}

  init() {
    if (!environment.gaMeasurementId) return;

    const script1 = this.doc.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${environment.gaMeasurementId}`;
    this.doc.head.appendChild(script1);

    const script2 = this.doc.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${environment.gaMeasurementId}');
    `;
    this.doc.head.appendChild(script2);
  }
}
