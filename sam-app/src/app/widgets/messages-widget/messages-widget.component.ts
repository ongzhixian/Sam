import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
    selector: 'app-messages-widget',
    templateUrl: './messages-widget.component.html',
    styleUrls: ['./messages-widget.component.css']
})
export class MessagesWidgetComponent {

    constructor(public messageService : MessageService) { }
}
