import { Injectable } from '@angular/core';
import { Message } from './models/message';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  private messages: Message[] = [];

  getMessages() {
    return this.messages;
  }

  sendMessage(message: Message) {
    this.messages.push(message);
  }
}
