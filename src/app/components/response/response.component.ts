import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ResponseFormatComponent } from '../response-format/response-format.component';

@Component({
  selector: 'app-response',
  imports: [CommonModule,ResponseFormatComponent],
  templateUrl: './response.component.html',
  styleUrl: './response.component.scss'
})
export class ResponseComponent {

  showResponse = false;
  @Input() data: any;

  
toggleResponse() {
  this.showResponse = !this.showResponse;
}
}
