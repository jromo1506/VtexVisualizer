import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VisualizerComponent } from './pages/visualizer/visualizer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'VtexSCVisualizer';
}
