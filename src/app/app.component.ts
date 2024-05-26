import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from './model/contact.model';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private http:HttpClient){

  }
  contacts$=this.getContacts();
  
  
  
  getContacts(): Observable<Contact[]>
  {
    return this.http.get<Contact[]>('https://localhost:7132/api/Contacts');
    
  }
}


