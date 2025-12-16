import { Component } from '@angular/core';
import { ResponseFormatComponent } from '../../components/response-format/response-format.component';
import { CommonModule } from '@angular/common';
import { ResponseComponent } from '../../components/response/response.component';
import { ApiVtexService } from '../../services/api-vtex.service';

@Component({
  selector: 'app-visualizer',
  imports: [ResponseFormatComponent,CommonModule,ResponseComponent],
  templateUrl: './visualizer.component.html',
  styleUrl: './visualizer.component.scss'
})
export class VisualizerComponent {
  constructor(public apiVtex: ApiVtexService) {}


}
