import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ChatgptService {
  inputValue: string | undefined;
  texto: string | undefined;
  constructor(private http: HttpClient) { }

  sendInput() {
    const url = `http://localhost:8080/chatbot/chat?message=${this.inputValue}`;
    this.http.get(url).subscribe(
      (response: any) => {
        this.texto = response.texto;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
