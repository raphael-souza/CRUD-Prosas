import { Component, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Home';

  // decorator que premite a utilizacao das mensagens de erro
  @ViewChild(ErrorMsgComponent) errorMshComponent: ErrorMsgComponent;
}
