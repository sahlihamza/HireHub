// messaging.component.ts

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../models/message';
import { MessagingService } from '../messaging.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css'],
})
export class MessagingComponent {
  messages: Message[] = [];
  newMessageSender: string = '';
  newMessageContent: string = '';

  constructor(private messagingService: MessagingService) {
    this.messages = this.messagingService.getMessages();
  }

  sendMessage() {
    const newMessage: Message = {
      id: 0,
      sender: this.newMessageSender,
      content: this.newMessageContent,
      timestamp: new Date(),
    };

    this.messagingService.sendMessage(newMessage);

    this.newMessageSender = '';
    this.newMessageContent = '';
  }
}
