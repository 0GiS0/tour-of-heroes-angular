import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  async sendEvent(eventType: string, heroId: number, heroName: string) {

    console.log(`sendEvent invoked`);
    var event = {
      type: eventType,
      heroId: heroId,
      heroName: heroName
    };

    var data = JSON.stringify(event);

    console.log(`Sending event: ${data}`);

    try {

      this.getEventHubSasToken().subscribe(async (sas) => {
        console.log(sas);

        const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', sas);
        this.http.post(`${environment.eventHub.endpoint}/${environment.eventHub.hubName}/messages`,data, { headers: headers}).pipe(tap(_ => console.log('event sent'))).subscribe();
      });

    } catch (error) {
      console.log(`Error: ${error}`);
    }

  }

  getEventHubSasToken(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    return this.http.get(`${environment.apiUrl}/eventhub/sas`, { headers: headers, responseType: 'text' })
      .pipe(tap(_ => console.log('get sas to send event to Event Hubs')))
  };
}