import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatgptService } from '../chatgpt.service';

@Component({
  selector: 'app-chatgpt',
  templateUrl: './chatgpt.component.html',
  styleUrls: ['./chatgpt.component.css']
})
export class ChatgptComponent extends ChatgptService {
}
