import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userInput: string;
  returnedString: string;

  constructor(private http: HttpClient) { }

  sendString(): void {
    this.http.post('http://localhost:3000/echo', { string: this.userInput })
      .subscribe((res: any) => {
        this.returnedString = res.echoedString;
      });
  }
}
