import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';





@Component({
  selector: 'app-response-format',
  imports: [CommonModule],
  templateUrl: './response-format.component.html',
  styleUrl: './response-format.component.scss'
})
export class ResponseFormatComponent {

  data = {
  orderId: 123,
  status: 'approved',
  items: [
    { sku: 'A1', qty: 2 },
    { sku: 'B2', qty: 1 }
  ]
};


  

}
