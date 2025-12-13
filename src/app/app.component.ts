import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VisualizerComponent } from './pages/visualizer/visualizer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'VtexSCVisualizer';
}
