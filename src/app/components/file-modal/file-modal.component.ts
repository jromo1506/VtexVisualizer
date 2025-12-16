import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-file-modal',
  imports: [CommonModule],
  templateUrl: './file-modal.component.html',
  styleUrl: './file-modal.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class FileModalComponent {
  @Input() open = false;
  @Output() close = new EventEmitter<void>();
  @Output() accept = new EventEmitter<void>();

}
