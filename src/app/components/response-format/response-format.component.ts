import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';





@Component({
  selector: 'app-response-format',
  imports: [CommonModule],
  templateUrl: './response-format.component.html',
  styleUrl: './response-format.component.scss'
})
export class ResponseFormatComponent {

 
  @Input() data: any;

  showResponse = false;

  toggleResponse() {
    this.showResponse = !this.showResponse;
  }
};


  


